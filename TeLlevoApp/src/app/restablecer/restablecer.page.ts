import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  correo:String;
  form: FormGroup;
  constructor(
    public ToastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      correo: [null, Validators.required]
    });
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    //declaro e instancio un objeto de tipo NavigationExtras
    let navigationextras: NavigationExtras = {
      state: { user: this.correo }, //asigno obj con clave y valor
    };
    //Ingresara a la page Home, usando la API Router para llamar a otra page+parametro
    this.presentToast(
      'Instrucciones de reestablecimiento enviado exitosamente a ' + this.correo
    );
    this.router.navigate(['/login'], navigationextras);
    console.log(this.form.value);
  }

  atras() {
    this.router.navigate(['/login']);
  }

  async presentToast(msg: string) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
