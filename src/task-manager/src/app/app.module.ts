import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskListOverviewComponent} from './components/task-list-overview/task-list-overview.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import { TaskListCardComponent } from './components/task-list-card/task-list-card.component';

@NgModule({
  declarations: [AppComponent, TaskListOverviewComponent, TaskListComponent, TaskItemComponent, TaskListCardComponent,],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
