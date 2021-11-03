import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  type: String;
  destino: String;
  tarifa: String;
  hora: Time;
  fecha: Date;
  viajeForm: FormGroup;

  constructor(
    public ToastController: ToastController,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public alertController: AlertController,
  ) {
     //llamar a la ruta activa y obtener sus parámetros (si es que tiene)
     this.ActivatedRoute.queryParams.subscribe((params) => {
      //utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }
    });
   }

  ngOnInit() {
    this.type = 'home';
    this.viajeForm = this.formBuilder.group({
      destino: [null, [Validators.required]],
      tarifa: [null, [Validators.required]],
      hora: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
    });
  }

  async crearViaje(){

  }

  submit(){
    if(!this.viajeForm.valid){
      return;
    }
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
        destino : this.destino,
        tarifa: this.tarifa,
        hora: this.hora,
        fecha: this.fecha,
      },
    };
    this.presentToast(
      'Viaje creado exitosamente.'
    );
    this.type='home';
    console.log(this.viajeForm.value);
  }

  segmentChanged(ev: any){
    console.log('Segment changed', ev);
  }

  async presentToast(msg: string) {
    const toast = await this.ToastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  async atras(){
    const alert = await this.alertController.create({
      header:'Sesión terminada',
      message:'Muchas gracias por utilizar Te llevo App.',
      buttons: ['Ok']
    });

    await alert.present();
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
    return;
  }
}
