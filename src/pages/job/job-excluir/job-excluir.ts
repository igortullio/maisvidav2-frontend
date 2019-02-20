import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {JobService} from "../../../services/domain/job.service";

@IonicPage()
@Component({
  selector: 'page-job-excluir',
  templateUrl: 'job-excluir.html',
})
export class JobExcluirPage {

  id: string;
  alertSuccess = this.alertCtrl.create({title: 'Excluído com sucesso!'});
  alertError = this.alertCtrl.create({title: 'Erro!'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public jobService: JobService, public alertCtrl: AlertController) {
  }

  excluir() {
    this.jobService.delete(this.id).subscribe(
      response => {
        this.alertSuccess.present();
      },
      error => {
        this.alertError.present();
      }
    );
  }

}
