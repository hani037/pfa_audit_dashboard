import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {audits, users} from "./users.component";
import {audit} from "./audit.model";
import {level} from "../dashboard/level.models";
import {environment} from "../../../../environments/environment";
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
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  public get_users(){
    return this.http.get<users[]>(this.baseUrl+'list_all_users');
  }
  public delete_user(id){
    return this.http.delete<{message:string}>(this.baseUrl+`delete_user/${id}`);
  }
  public get_audits(){
    return this.http.get<audit[]>(this.baseUrl+'audit');
  }
  public get_levels(){
    return this.http.get<level[]>(this.baseUrl+'levels');
  }
  public async get_auditsbyuser(id){
    return this.http.get<audits[]>(this.baseUrl+`userAudits/${id}`);
  }
  public get_family(){
    return this.http.get<family[]>(this.baseUrl+`getRequFamily`);

  }
  public update_family(id,value){
    return this.http.put<{}>(this.baseUrl+`updateRequFamilyDescription/${id}`,{description:value});

  }
  public update_requ(id,value){
    return this.http.put<{}>(this.baseUrl+`updateDescription/${id}`,{description:value});

  }
  public get_level_L2() {
    return  this.http.get<lev[]>(this.baseUrl+`get_L2`);
  }
  public get_level_R() {
    return  this.http.get<lev[]>(this.baseUrl+`get_R`);
  }
  public  get_requ(id){
    return this.http.get<requ[]>(this.baseUrl+`getRequ/${id}`);
  }
  public update_proc(id,value){
    return this.http.put<{}>(this.baseUrl+`updateProcedure/${id}`,{procedure:value});

  }
}


