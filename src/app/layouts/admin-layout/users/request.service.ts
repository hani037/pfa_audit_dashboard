import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {audits, users} from "./users.component";
import {audit} from "./audit.model";
import {level} from "../dashboard/level.models";
export interface lev {
  _id:{
    family_description: string,
    family_id: string,
    family_name: string,
    family_rank: number
  },
  requ:
    {requ_id: string, level: string, requ_rank: number, requ_desctiption:string,requ_procedure:string[]}[]
}
export interface requ {
  description: string,
  family_id:string,
  level: string,
  procedure: string[],

}

export interface family {
  _id: string
  family: string,
  description: string,
  rank: number
}
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  public get_users(){
    return this.http.get<users[]>('http://localhost:8050/list_all_users');
  }
  public delete_user(id){
    return this.http.delete<{message:string}>(`http://localhost:8050/delete_user/${id}`);
  }
  public get_audits(){
    return this.http.get<audit[]>('http://localhost:8050/audit');
  }
  public get_levels(){
    return this.http.get<level[]>('http://localhost:8050/levels');
  }
  public async get_auditsbyuser(id){
    return this.http.get<audits[]>(`http://localhost:8050/userAudits/${id}`);
  }
  public get_family(){
    return this.http.get<family[]>(`http://localhost:8050/getRequFamily`);

  }
  public update_family(id,value){
    return this.http.put<{}>(`http://localhost:8050/updateRequFamilyDescription/${id}`,{description:value});

  }
  public update_requ(id,value){
    return this.http.put<{}>(`http://localhost:8050/updateDescription/${id}`,{description:value});

  }
  public get_level_L2() {
    return  this.http.get<lev[]>(`http://localhost:8050/get_L2`);
  }
  public get_level_R() {
    return  this.http.get<lev[]>(`http://localhost:8050/get_R`);
  }
  public  get_requ(id){
    return this.http.get<requ[]>(`http://localhost:8050/getRequ/${id}`);
  }
  public update_proc(id,value){
    return this.http.put<{}>(`http://localhost:8050/updateProcedure/${id}`,{procedure:value});

  }
}


