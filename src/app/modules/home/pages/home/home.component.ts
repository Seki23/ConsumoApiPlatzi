import { Component, OnInit } from '@angular/core';
import { ListarService } from '@modules/home/service/listar.service';
import { IUsuario } from '../interface/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usuarios:IUsuario[]=[];

  constructor(private lista: ListarService) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this.lista.getUsuarios().subscribe((resp)=>{
      this.usuarios=resp;
      console.log(this.usuarios);
      
    });
  }

}
