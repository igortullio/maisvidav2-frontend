import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobInserirPage } from './job-inserir';

@NgModule({
  declarations: [
    JobInserirPage,
  ],
  imports: [
    IonicPageModule.forChild(JobInserirPage),
  ],
})
export class JobInserirPageModule {}
