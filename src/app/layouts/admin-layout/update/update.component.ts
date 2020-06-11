import {Component, OnInit, ViewChild} from '@angular/core';
import {family, lev, RequestService} from "../users/request.service";
import {MatDialog} from "@angular/material/dialog";
import {InfoComponent} from "../info/info.component";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @ViewChild('my_input')my_input;
  @ViewChild('my_input2')my_input2;
  public family:family[];
  public nb=-1;
  public nb2=-1;
  level_l2:lev[];
  level_R:lev[];
  levels:lev[];
  level:lev;
  i=0;
  sel=false;
  constructor(private requestService:RequestService,private dialog:MatDialog) { }

  async ngOnInit() {
    this.family=await this.requestService.get_family().toPromise();
    this.level_l2=await this.requestService.get_level_L2().toPromise();
    this.level_R=await this.requestService.get_level_R().toPromise();
    this.levels=this.level_l2.concat(this.level_R);
    this.level=this.levels[0];
    this.sel=true;
    //console.log(this.level);
  }

  public async get_family(){
    this.family=await this.requestService.get_family().toPromise();

  }
  public async  get_requ(){
    this.level_l2=await this.requestService.get_level_L2().toPromise();
    this.level_R=await this.requestService.get_level_R().toPromise();
    this.levels=this.level_l2.concat(this.level_R);
    this.level=this.levels[this.i];
  }
  save(id,value) {
    console.log(value);
  this.requestService.update_family(id,value).subscribe(data=>{
    this.nb=-1;
    this.get_family();

  })
  }
  public save2(id,value){
    this.requestService.update_requ(id,value).subscribe(data=> {
    this.get_requ();
      this.nb2=-1;

    })
  }
  left() {
    if (this.i===0){
      this.i=this.levels.length-1;
      this.level=this.levels[this.i]
    } else {
      this.i--;
      this.level=this.levels[this.i];
    }

  }
  right(){
    if (this.i===this.levels.length-1){
      this.i=0;
      this.level=this.levels[this.i]
    } else {
      this.i++;
      this.level=this.levels[this.i];
    }
  }

  info(data,id) {
    this.dialog.open(InfoComponent, {
      data: {id:id},
      width:'536px',
      backdropClass: 'backdropBackground' // This is the "wanted" line
    })
  }
}
