import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  instrumentosFile: any = (data as any).default;

  constructor() { }

  public getInstrumentos(): any[] {
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentoXId(idx: string): any {
    for (let instrumento of this.instrumentosFile.instrumentos) {
      if (instrumento.id == idx) {
        return instrumento;
      }
    }
  }

  public buscarInstrumentos(termino:string):any[]{
    let instrumentosArr:any[] = [];
    termino = termino.toLowerCase();

    for(let instrumento of this.instrumentosFile.instrumentos){
      let nombre = instrumento.instrumento.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        instrumentosArr.push(instrumento);
      }

    }
    return instrumentosArr;
  }

  



}
