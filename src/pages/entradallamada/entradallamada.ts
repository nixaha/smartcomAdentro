import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-entradallamada',
  templateUrl: 'entradallamada.html',
})
export class EntradallamadaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) {
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'El portón se esta Abriendo',
      duration: 3000
    });
    toast.present();
  }

  Toast() {
    let toast = this.toastCtrl.create({
      message: 'El portón se esta Cerrando',
      duration: 3000
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EntradallamadaPage');
  }

}