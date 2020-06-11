import { Component, OnInit } from '@angular/core';
import {RequestService} from "./request.service";
export interface audits {
  title: string;
  _id:string,
  level: string,
  user_id: string,
  ONLINE_MASVS_VERSION:string,
  MSTG_VERSION:string,
  ONLINE_MSTG_VERSION:string,
  Client_Name:string,
  Test_location:string,
  Start_Date:string,
  Closing_Date:string,
  Name_Of_Tester:string,
  Testing_Scope:string,
  Application_Name:string,
  Google_PlayStore_Link:string,
  Filename:string,
  Version:string,
  SHA256_HASH_OF_APK:string
}
export interface users {
  _id:string,
  email:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public audits:audits[];
  px: string;
  users:users[];
  sel=false;
  sel1: number=1;
  name;

  constructor(private requestService:RequestService) { }

  async ngOnInit(){
  this.users = await this.requestService.get_users().toPromise();
  this.sel=true;
    console.log(this.users);
  }
  public async get_audits(id){
    this.audits=await (await this.requestService.get_auditsbyuser(id)).toPromise();

  }

  delete_user(_id: string) {
  this.requestService.delete_user(_id).subscribe(async data=>{
    this.users = await this.requestService.get_users().toPromise();
  })
  }

  open_user(_id: string,email:string) {
    this.name=email;
    this.sel1=2;
    this.get_audits(_id);
  }

  back() {
    this.sel1=1;
  }
}
