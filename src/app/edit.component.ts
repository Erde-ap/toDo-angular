import { Component,EventEmitter,Input,Output } from "@angular/core";
import { List } from "./list";


@Component({
    selector: 'edit-item',
    template: `
    <!-- item属性でリスト情報を受け取った来た時にだけ表示 -->
    <form #editForm="ngForm" (ngSubmit)="onSubmit()" *ngIf="item">
      <div>
        <label for="content">内容：</label><br>
        <input id="content" name="content" type="text" [(ngModel)]="item.content">
        <input type="submit" value="変更">
      </div>
    </form>
    `,
    styles:[
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