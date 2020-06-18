import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, from, Subject} from 'rxjs';
import { User } from './user.model';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  public user :User;
  public notification =new Subject<boolean>();
  get userIsAuthenticated() {
    if (this.user){
      return true;
    } return false;

  }
  public getToken(){
    if (this.user){
      return this.user.token;
    }
    return null;
  }

  constructor(private http: HttpClient) {}

  autoLogin() {
    const storedData =localStorage.getItem('authadmin');
    if (storedData==null){
      return false;
    }
    const parsedData = JSON.parse(storedData) as {
      userId: string;
      token: string;
      role: string
    };
    const user = new User(
      parsedData.userId,
      parsedData.token
    );

    this.user = user;
    return true;
  }


  public login(el: string, pass: string) {
    return this.http.post<{userId: string, token: string, message: string}>(this.baseUrl+'login_admin',
      {email: el, password: pass});
  }

  logout() {
    this.user=null;
    localStorage.removeItem('authadmin');
  }

  public setUserData(id, token) {
    const user = new User(id, token);
    this.user=user;
    this.storeAuthData(
      id, token
    );
  }

  private storeAuthData(
    Id: string,
    tokenn: string
  ) {
    const data = JSON.stringify({
      userId: Id,
      token: tokenn
    });
    localStorage.setItem('authadmin',data );
    this.notification.next(true);
  }
}
