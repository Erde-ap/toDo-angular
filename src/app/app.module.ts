import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { EditComponent } from "./edit.component";
import { ListService } from "./list.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [ListService,
              NgbActiveModal
              ],
  bootstrap: [AppComponent],
  entryComponents: [ EditComponent ],
})
export class AppModule { }
