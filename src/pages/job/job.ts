import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Job} from "../../models/job";

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  job: Job[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  visualizar() {
    this.navCtrl.push("JobVisualizarPage");
  }

  excluir() {
    this.navCtrl.push("JobExcluirPage");
  }

  inserir() {
    this.navCtrl.push("JobInserirPage");
  }

}
