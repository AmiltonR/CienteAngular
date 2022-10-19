import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BuscarporNombreComponent } from './pages/buscarpor-nombre/buscarpor-nombre.component';
import { BuscarporRolComponent } from './pages/buscarpor-rol/buscarpor-rol.component';



@NgModule({
  declarations: [
    BuscarComponent,
    BuscarporNombreComponent,
    BuscarporRolComponent
  ],
  exports:[
    BuscarComponent,
    BuscarporNombreComponent,
    BuscarporRolComponent

  ],

  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
