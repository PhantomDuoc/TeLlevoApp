import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dato: any;

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router) {
    //llamar a la ruta activa y obtener sus parámetros (si es que tiene)
    this.ActivatedRoute.queryParams.subscribe((params) => {
      //utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) {
        this.dato = this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato);
      }
    });
  }

  ngOnInit() {}
}
