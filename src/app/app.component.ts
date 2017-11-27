import { Component,OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from "@angular/animations";

import { List } from "./list";
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('labelState',[
      state('inactive',style({transform: 'scale(1,1)'})),
      state('void',style({transform:'translateX(100%)'})),
      state('active',style({transform:'scale(1.02,1.02)'})),
      transition('void => inactive', [
        animate('400ms ease-in',style({transform: 'translateX(0)'}))
      ]),
      transition('* => void', [
        animate('350ms ease-in', style({transform: 'translateX(-100%)'}))
      ]),
      transition('inactive => active', [
        animate('190ms ease-in', style({transform: 'scale(1.02,1.02)'}))
     ])
    ])
  ]
})
export class AppComponent implements OnInit{
  lists: List[];
  inputValue = "";
  selected: List;
  stateFlag: string = 'inactive';

  constructor(private listservice:ListService){};

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
    this.listservice.setList(input);
    this.inputValue = "";
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

  mouseEnter(item:List){
      item.state = 'active';
  }
  mouseLeave(item:List){
      item.state = 'inactive';
  }


}
