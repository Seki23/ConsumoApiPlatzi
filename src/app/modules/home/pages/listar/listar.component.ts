import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from '../interface/usuario.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  @Input () obj!:IUsuario;

  constructor() { }

  ngOnInit(): void {
  }

}
