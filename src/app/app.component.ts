import { Component } from '@angular/core';

import { List } from "./list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  listItem:string = ``;
  inputValue = "";
  selected: List;
  current = new Date();
  lists = [];

  selectClick(list:List){
    this.selected = list;
  }

  addItem(input:string){
    if (input == "") {
    return false;
    }else{
      var tempLists : List = {
        id: this.lists.length+1,
        date: new Date(),
        content: input,
        finished_flag:false
      }
      this.lists.push(tempLists);
      this.inputValue= "";
    }
  }

  finishClick(list:List){
    this.lists[list.id-1].finished_flag = true;
  }

}
