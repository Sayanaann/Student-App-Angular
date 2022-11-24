import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewAllComponent } from './student-view-all/student-view-all.component';

const myRoute:Routes=[
  {
  path:"",
  component : StudentEntryComponent
     },
   {
      path : "View",
      component : StudentViewAllComponent
     }

]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
