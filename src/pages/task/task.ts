import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  visualizar() {
    this.navCtrl.push("TaskVisualizarPage");
  }

  excluir() {
    this.navCtrl.push("TaskExcluirPage");
  }

  inserir() {
    this.navCtrl.push("TaskInserirPage");
  }

}
