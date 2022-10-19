import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  constructor(private UsuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.buscar();
  }
  usuarios: any = [];
  buscar()
  {
    this.UsuarioService.buscarUsuarios().subscribe((Buscausuario) => {
      console.log(Buscausuario);
      this.usuarios = Buscausuario.usuarios;
      console.log(Buscausuario);
      
    }, (err)=> {
      console.log('Error al listar los Usuarios');
    })
  }

}
