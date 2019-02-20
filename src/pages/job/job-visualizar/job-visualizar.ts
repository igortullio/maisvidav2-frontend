import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Job} from "../../../models/job";
import {JobService} from "../../../services/domain/job.service";
import {Task} from "../../../models/task";

@IonicPage()
@Component({
  selector: 'page-job-visualizar',
  templateUrl: 'job-visualizar.html',
})
export class JobVisualizarPage {

  jobs: Job[];
  tasks: Task[];
  obj: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public jobService: JobService) {
  }

  ionViewDidLoad() {
    this.jobService.findAll().subscribe(
      response => {
        this.jobs = response;
      },
      error => {}
    );
  }

}
