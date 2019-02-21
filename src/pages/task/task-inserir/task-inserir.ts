import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TaskService} from "../../../services/domain/task.service";
import {TaskImpl} from "../../../models/task";

@IonicPage()
@Component({
  selector: 'page-task-inserir',
  templateUrl: 'task-inserir.html',
})
export class TaskInserirPage {

  name: string;
  weight: number;
  completed: boolean;
  alertSuccess = this.alertCtrl.create({title: 'Inserido com sucesso!'});
  alertError = this.alertCtrl.create({title: 'Erro!'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TaskService, public alertCtrl: AlertController) {
  }

  salvar() {
    this.taskService.insert(new TaskImpl(this.name, this.weight, this.completed)).subscribe(
      response => {
        this.alertSuccess.present();
      },
      error => {
        this.alertError.present();
      }
    );
  }

}
