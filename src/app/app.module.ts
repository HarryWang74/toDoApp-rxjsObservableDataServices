import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from './services/to-do.service';
import { ApplicationMessageService } from './services/applicationMessage.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ToDoCreateComponent } from './components/to-do-create/to-do-create.component';
import { ToDoDetailComponent } from './components/to-do-detail/to-do-detail.component';
import { ToDoAppComponent } from './components/to-do-app/to-do-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoCreateComponent,
    ToDoDetailComponent,
    ToDoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule
  ],
  providers: [ToDoService, ApplicationMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
