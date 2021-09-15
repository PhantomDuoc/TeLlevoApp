import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dato: String;
  constructor(private router: Router) {}

  ngOnInit() {}

  ingresar() {
    //creo un elemento navitagionextras para pasar parámetros
    let navigationExtra: NavigationExtras = {
      state: { dato: this.dato },
    };

    //utilizar api router para cambiar de página
    this.router.navigate(['/home'], navigationExtra);
  }
}
