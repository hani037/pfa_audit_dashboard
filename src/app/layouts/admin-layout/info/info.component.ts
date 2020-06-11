import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {lev, requ, RequestService} from "../users/request.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @ViewChild('my_input')my_input;
  @ViewChild('my_input2')my_input2;
  _add=false;
  sel=false;
  nb=-1;
  requ:requ[];
  procedure:string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data:{id:string},private requestService:RequestService) { }

  async ngOnInit(){
    this.requ=await this.requestService.get_requ(this.data.id).toPromise();
    this.sel=true;
    this.procedure=this.requ[0].procedure;
    console.log(this.requ[0]);
  }

  delete(i:number) {
  this.procedure.splice(i,1);
    this.requestService.update_proc(this.data.id,this.procedure).subscribe(async data=>{
      this.requ=await this.requestService.get_requ(this.data.id).toPromise();
      this.procedure=this.requ[0].procedure;
      this.nb=-1;
    })
  }

  save(text:string,i:number) {

    console.log(text);
  this.procedure[i]=text;
  console.log( this.procedure);
    this.requestService.update_proc(this.data.id,this.procedure).subscribe(async data=>{
    this.requ=await this.requestService.get_requ(this.data.id).toPromise();
    this.procedure=this.requ[0].procedure;
    this.nb=-1;
  })
  }

  add() {
  this._add=true;
  }

  save2() {
    if( this.my_input2.nativeElement.value==""){
      this._add=false;
    }else {
      this.procedure.push(this.my_input2.nativeElement.value);
      this.requestService.update_proc(this.data.id,this.procedure).subscribe(async data=>{
        this.requ=await this.requestService.get_requ(this.data.id).toPromise();
        this.procedure=this.requ[0].procedure;
        this._add=false;
      })
    }
  }
}
