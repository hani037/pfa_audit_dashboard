import { Pipe, PipeTransform } from '@angular/core';
import {audits} from "./users/users.component";

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(items:audits[], arg1:string,arg2:string) {
    console.log(arg2);
    if (arg2=='client name'){
      items = items.filter(item => item.Client_Name.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);


    }else if (arg2=='level'){
      items = items.filter(item => item.level.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
    }else {
      items = items.filter(item => item.title.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);

    }

    return items;
  }

}
