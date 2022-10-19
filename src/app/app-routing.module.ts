import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './usuarios/pages/buscar/buscar.component';
import { BuscarporNombreComponent } from './usuarios/pages/buscarpor-nombre/buscarpor-nombre.component';
import { BuscarporRolComponent } from './usuarios/pages/buscarpor-rol/buscarpor-rol.component';



const routes: Routes = [
    {
        path:'buscar',
        component:BuscarComponent,
        pathMatch:'full'
    },
    {
        path:'buscarporrol',
        component:BuscarporRolComponent
        
    },
    {
        path:'buscarpornombre',
        component:BuscarporNombreComponent
        
    },
    
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes) 
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
