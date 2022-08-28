import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentosArray:any[] = [];
  
  constructor(private servicio:FuncionesService, private router:Router) { }

  ngOnInit(): void {
    this.instrumentosArray = this.servicio.getInstrumentos();
  }

  public verInstrumento(idx:string){
    this.router.navigate(['/detalleinstrumento', idx])
  }

}
