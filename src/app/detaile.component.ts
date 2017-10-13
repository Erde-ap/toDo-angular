import { Component,Input } from "@angular/core";
import { List } from "./list";


@Component({
    selector: 'detaile-list',
    template: `
    <div class="col-md-9 col-12 mx-auto">
        <ul *ngIf="item">
            <li>ID:{{item.id}}</li>
            <li>日時:{{item.date | date: 'y MM dd (EEE) '}}</li>
            <li>内容:{{item.content}}</li>
            <li>フラグ:{{item.finished_flag}}</li>
        </ul>
    </div>
    `,
  })
  export class DetaileComponent {
    @Input() item:List;
  }