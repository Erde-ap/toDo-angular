import { Component,OnInit } from '@angular/core';

import { List } from "./list";
import { trigger,state,style,transition,animate } from "@angular/animations";
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('labelState',[
      state('active',style({transform: 'translateX(0)'})),
      state('void',style({transform:'translateX(100%)'})),
      transition('void => active', [
        animate('5000ms ease-in',style({transform: 'translateX(0)'}))
      ]),
      transition('active => void', [
        animate('350ms ease-in', style({transform: 'translateX(-100%)'}))
     ])
    ])
  ]
})
export class AppComponent implements OnInit{
  inputValue = "";
  selected: List;
  lists :List[];

  constructor(private listservice: ListService){}

  ngOnInit(){
    this.lists = this.listservice.getList();
  }

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
        let tempLists : List = {
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
