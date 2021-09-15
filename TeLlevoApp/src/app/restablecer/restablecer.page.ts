import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  dato: String;
  constructor(
    public ToastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  restablecer() {
    this.presentToast();
    this.router.navigate(['/login']);
  }

  async presentToast() {
    const toast = await this.ToastController.create({
      message: 'Correo de restablecimiento enviado a ' + this.dato,
      duration: 2000,
    });
    toast.present();
  }
}
