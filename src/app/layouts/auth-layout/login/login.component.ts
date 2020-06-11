import {Component, Inject, OnInit} from '@angular/core';
import { AuthService} from '../shared/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public message:string;
  constructor(public authService: AuthService,public router:Router) {
  }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value);
    this.authService.login(f.value.email, f.value.password).subscribe(data => {
      console.log(data);
      if(data.message=="A user with this email could not be found."){
        this.message = " email not found."
      }else if(data.message=="Wrong password!"){
        this.message ="Wrong password!"
      }else  {
        this.router.navigate(["/dashboard"]);
        this.authService.setUserData(data.userId, data.token);
      }
    });
  }

}
