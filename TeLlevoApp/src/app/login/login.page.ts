import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato: String;
  constructor(
    public ToastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  restablecer() {
    this.router.navigate(['/restablecer']);
  }

  ingresar() {
    //creo un elemento navitagionextras para pasar parámetros
    let navigationExtra: NavigationExtras = {
      state: { dato: this.dato },
    };

    //utilizar api router para cambiar de página
    this.router.navigate(['/home'], navigationExtra);
  }

  saludar() {
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.ToastController.create({
      message: 'Hola ' + this.dato,
      duration: 2000,
    });
    toast.present();
  }
}
