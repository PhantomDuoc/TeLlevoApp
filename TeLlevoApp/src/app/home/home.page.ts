import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dato:String;

  constructor(public toastController: ToastController) {}
  
  saludar(){
    this.presentToast()
  }
  
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Hola '+ this.dato,
      duration: 2000
    });
    toast.present();
  }

}
