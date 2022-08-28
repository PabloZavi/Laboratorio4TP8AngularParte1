import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Módulo importante, es el archivo de ruteo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { HomeComponent } from './components/home/home.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { FuncionesService } from './servicios/funciones.service';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstrumentosComponent,
    DetalleInstrumentoComponent,
    HomeComponent,
    DondeEstamosComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [FuncionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
