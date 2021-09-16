import { Component, OnInit, Inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  user: string;
  horaSalida: any;
  tarifa: number;
  destino: String;
  viajeForm: FormGroup;

  constructor(
    public ToastController: ToastController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.viajeForm = this.formBuilder.group({
      horaSalida: [null, [Validators.required]],
      tarifa: [null, Validators.required],
      destino: [null, Validators.required],
    });
  }

  submit() {
    if (!this.viajeForm.valid) {
      return;
    }
    //declaro e instancio un objeto de tipo NavigationExtras
    let navigationextras: NavigationExtras = {
      state: {
        user: this.user,
        horaSalida: this.horaSalida,
        destino: this.destino,
        tarifa: this.tarifa,
      }, //asigno obj con clave y valor
    };
    //Ingresara a la page Home, usando la API Router para llamar a otra page+parametro
    this.presentToast(
      'Viaje con destino a ' + this.destino + ' creado exitosamente.'
    );
    this.router.navigate(['/home'], navigationextras);
    console.log(this.viajeForm.value);
  }

  atras() {
    this.router.navigate(['/home']);
  }

  async presentToast(msg: string) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
