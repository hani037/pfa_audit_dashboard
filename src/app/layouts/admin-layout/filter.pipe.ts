import { Pipe, PipeTransform } from '@angular/core';
import {users} from "./users/users.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:users[], arg1:string) {
    items = items.filter(item => item.email.toUpperCase().indexOf(arg1.toUpperCase()) !== -1);
    return items;

  }

}
