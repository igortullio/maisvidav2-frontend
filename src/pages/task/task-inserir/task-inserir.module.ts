import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskInserirPage } from './task-inserir';

@NgModule({
  declarations: [
    TaskInserirPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskInserirPage),
  ],
})
export class TaskInserirPageModule {}
