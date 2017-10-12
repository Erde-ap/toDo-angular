import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  listItem:string = ``;
  inputValue = "";
  safeListItem:SafeHtml;

  addItem(input:string){
    if (input == "") {
      return false;
    }else{
      this.listItem += `
      <li class="todo-item-group todo-item">
      <label>${input}</label>
      <span class="input-group-btn">
      <button class="btn btn-outline-info">完了</button>
      </span>
      </li>`;
      this.inputValue ="";
      return this.safeListItem = this.sanitizer.bypassSecurityTrustHtml(this.listItem);
    }
  }
  constructor(private sanitizer: DomSanitizer) {
  }
}
