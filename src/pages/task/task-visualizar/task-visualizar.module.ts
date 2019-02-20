import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskVisualizarPage } from './task-visualizar';

@NgModule({
  declarations: [
    TaskVisualizarPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskVisualizarPage),
  ],
})
export class TaskVisualizarPageModule {}
