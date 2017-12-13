import { Component,EventEmitter,Input,Output } from "@angular/core";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { List } from "./list";
import { ListService } from "./list.service";

@Component({
    selector: 'edit-modal',
    template: `
    <div class="col-md-9 col-12 mx-auto" *ngIf="item">
     <ul class="list-group">
       <div class="edit-group">
          <p>編集</p>
          <li class="todo-item-group todo-item"><label><input class="ori-input" type="text"  [(ngModel)]="item.content" autocomplete="off"></label>
              <span class="input-group-btn">
              <button type="submit" class="btn btn-outline-info btn1" (click)="onsubmit()">編集完了</button>
              <button type="submit" class="btn btn-outline-danger btn2" (click)="reset()">取消</button>
              </span>
          </li>
       </div>
      </ul>
      </div>
    `,
    styles:[
      `
      .ori-input{
        outline: none;
        border:0px;
      }
      .edit-group{
        border:solid 1px #ccc;
        border-radius: 5px;
        margin:15px 0;
        padding:15px;
      }
      .btn1{
        border-radius:0 5px 0 0!important;
        border-color:rgba(0,0,0,.15);
      }
      .btn2{
        border-radius:0 0 5px 0!important;
        border-color:rgba(0,0,0,.15);
        border-top:0;
      }
      `
    ]
  })
  export class EditComponent {
    @Input() item:List;
    @Input() name;
    @Output() edited = new EventEmitter<List>();
    constructor(public activeModal: NgbActiveModal) {}
    //サブミット時にeditedイベントを発生【$evetにはListオブジェクトを代入】
    onsubmit(){
      this.edited.emit(this.item);
    }
    reset(){
      this.item = null;
    }
  }