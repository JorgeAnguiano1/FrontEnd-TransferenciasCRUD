import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Pagador} from '../models/pagador';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagadorService {

  API_URI = 'https://localhost:44314/api'

  constructor(private http: HttpClient) { }
    getPagadores(){
      return this.http.get(`${this.API_URI}/pagador`)
    }
  
    getPagador(id:string){
      return this.http.get(`${this.API_URI}/pagador/${id}`)
    }
  
    createPagador(pagador: Pagador){
      return this.http.post(`${this.API_URI}/pagador`, pagador);
    }
  
    updatePagador(id: number, updatedPagador: Pagador){
      console.log(updatedPagador)
      return this.http.put(`${this.API_URI}/pagador/${id}`, updatedPagador);
    }

    deletePagador(id: number){
      console.log("Entra delete pagador servicio con id:", id);
      return this.http.delete(`${this.API_URI}/pagador/${id}`);
    }
}
