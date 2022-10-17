import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListOverviewComponent } from './components/task-list-overview/task-list-overview.component';
import { TaskListViewerComponent } from './components/task-list-viewer/task-list-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListOverviewComponent,
    TaskListViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
