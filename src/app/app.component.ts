import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listItem = "";

  addItem(input:string){
    this.listItem += `<li class="list-group-item">${input}</li>`;
  }

}
