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
    let tmp = new List();
    tmp.content = list.content;
    tmp.id = list.id;
    this.selected = tmp;
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
    this.selected = null;
  }

  onedited(list:List){
    for (let item of this.lists) {
      if(item.id === list.id){
        item.content = list.content;
        item.date = list.date;
      }
    }
    this.selected = null;
  }
}
