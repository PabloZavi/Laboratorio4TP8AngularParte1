import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionesService } from 'src/app/servicios/funciones.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento: any;

  constructor(private activatedRoute: ActivatedRoute, private servicio: FuncionesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.instrumento = this.servicio.getInstrumentoXId(params['id'])
    })
  }

}
