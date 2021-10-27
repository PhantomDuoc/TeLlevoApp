import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) {
    //llamar a la ruta activa y obtener sus parámetros (si es que tiene)
    this.ActivatedRoute.queryParams.subscribe((params) => {
      //utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }
    });
  }
  segmentChanged($event){
    
  }

  ngOnInit() {}

  crearViaje(){
    this.router.navigate(['/crear-viaje']);
  }

  atras(){
    this.router.navigate(['/login']);
  }
}
