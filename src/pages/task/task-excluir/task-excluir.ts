import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TaskService} from "../../../services/domain/task.service";

@IonicPage()
@Component({
  selector: 'page-task-excluir',
  templateUrl: 'task-excluir.html',
})
export class TaskExcluirPage {

  id: string;
  alertSuccess = this.alertCtrl.create({title: 'Excluído com sucesso!'});
  alertError = this.alertCtrl.create({title: 'Erro!'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TaskService, public alertCtrl: AlertController) {
  }

  excluir() {
    this.taskService.delete(this.id).subscribe(
      response => {
        this.alertSuccess.present();
      },
      error => {
        this.alertError.present();
      }
    );
  }

}
