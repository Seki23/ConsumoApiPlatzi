import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../pages/interface/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  baseUrl: string=environment.baseUrl;
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(`${this.baseUrl}/users`);
   }

}
