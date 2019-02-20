import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskExcluirPage } from './task-excluir';

@NgModule({
  declarations: [
    TaskExcluirPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskExcluirPage),
  ],
})
export class TaskExcluirPageModule {}
