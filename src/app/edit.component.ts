import { Component,EventEmitter,Input,Output } from "@angular/core";
import { List } from "./list";


@Component({
    selector: 'edit-item',
    template: `
    <!-- item属性でリスト情報を受け取った来た時にだけ表示 -->
    <div *ngIf="item" class="col-md-9 col-12 mx-auto">
    <form #editForm="ngForm" (ngSubmit)="onsubmit()">
      <div>
        <input id="content" name="content" type="text" [(ngModel)]="item.content" autocomplete="off">
        <input type="submit" value="変更" class="btn btn-primary">
        <input type="reset" value="取り消し" class="btn btn-primary" (click)="this.item = null;">
      </div>
    </form>
    </div>
    `,
    styles:[
      `#content{
        width: 60%;
        bottom: 10px;
        background: transparent;
        color: #595F6E;
        border-width: 0 0 1px 0;
        border-radius: 0;
        -webkit-appearance: none;
        display:fixed;
      }
      input[type="text"],
      input[type="password"],
      textarea,
      select {
          outline: none;
      }
      `
    ]
  })
  export class EditComponent {
    @Input() item:List;
    @Output() edited = new EventEmitter<List>();

    //サブミット時にeditedイベントを発生【$evetにはListオブジェクトを代入】
    onsubmit(){
      this.edited.emit(this.item);
    }
  }