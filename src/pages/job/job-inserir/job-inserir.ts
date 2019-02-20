import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-job-inserir',
  templateUrl: 'job-inserir.html',
})
export class JobInserirPage {

  name: string;
  active: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  salvar() {

  }

}
