import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {JobService} from "../../../services/domain/job.service";
import {JobImpl} from "../../../models/job";

@IonicPage()
@Component({
  selector: 'page-job-inserir',
  templateUrl: 'job-inserir.html',
})
export class JobInserirPage {

  name: string;
  active: boolean;
  alertSuccess = this.alertCtrl.create({title: 'Inserido com sucesso!'});
  alertError = this.alertCtrl.create({title: 'Erro!'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public jobService: JobService, public alertCtrl: AlertController) {
  }

  salvar() {
    this.jobService.insert(new JobImpl(this.name, this.active)).subscribe(
      response => {
        this.alertSuccess.present();
      },
      error => {
        this.alertError.present();
      }
    );
  }

}
