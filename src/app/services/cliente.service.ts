import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Cliente} from '../models/cliente';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API_URI = 'https://localhost:44314/api'
  
  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}/cliente`)
  }

  getCliente(id:string){
    return this.http.get(`${this.API_URI}/cliente/${id}`)
  }

  createCliente(cliente: Cliente){
    console.log(cliente);
    console.log("Aqui vale madre");
    return this.http.post(`${this.API_URI}/cliente`, cliente);
  }

  updateCliente(id: number, updatedCliente: Cliente){
    return this.http.put(`${this.API_URI}/cliente/${id}`, updatedCliente);
  }

  deleteCliente(id: number){
    console.log("Entra delete servicio con id:", id);
    return this.http.delete(`${this.API_URI}/cliente/${id}`);
  }
}
