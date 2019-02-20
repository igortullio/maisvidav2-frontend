import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TaskService} from "../../../services/domain/task.service";
import {Task} from "../../../models/task";

@IonicPage()
@Component({
  selector: 'page-task-visualizar',
  templateUrl: 'task-visualizar.html',
})
export class TaskVisualizarPage {

  tasks: Task[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService: TaskService) {
  }

  ionViewDidLoad() {
    this.taskService.findAll().subscribe(
      response => {
        this.tasks = response;
      },
      error => {}
    );
  }

}
