import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesService } from 'src/app/servicios/funciones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosBusqueda:any = [];
  termino:string = "";

  constructor(private activatedRoute:ActivatedRoute, private servicio:FuncionesService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.instrumentosBusqueda = this.servicio.buscarInstrumentos(params['termino']);
    });


  }

}
