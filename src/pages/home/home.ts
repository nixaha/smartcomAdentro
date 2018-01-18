import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntradallamadaPage } from '../entradallamada/entradallamada';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  entradallamada: any = EntradallamadaPage;

  constructor(public navCtrl: NavController) {

  }

    }
