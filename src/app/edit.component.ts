import { Component,EventEmitter,Input,Output } from "@angular/core";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { List } from "./list";
import { ListService } from "./list.service";

@Component({
    selector: 'edit-modal',
    template: `
    <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    <div class="modal-body">
      <form #editForm="ngForm" (ngSubmit)="onsubmit()">
        <div class="form-group">
          <label for="message-text" class="form-control-label">Message:</label>
          <input id="content" name="content" type="text" [(ngModel)]="item.content" autocomplete="off" class="form-control">
        </div>
      </form>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
    `,
    styles:[
      ``
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
  }