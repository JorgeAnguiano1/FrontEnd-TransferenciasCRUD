import { Injectable } from '@angular/core';
import {Transferencia} from '../models/transferencia'
import {HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  API_URI = 'https://localhost:44314/api'

  constructor(private http: HttpClient) {}
    getTransferencias(){
      return this.http.get(`${this.API_URI}/transferencia`)
    }
  
    getTransferencia(id:string){
      return this.http.get(`${this.API_URI}/transferencia/${id}`)
    }
  
    createTransferencia(transferencia: Transferencia){
      return this.http.post(`${this.API_URI}/transferencia`, transferencia);
    }
  
    updateCliente(id: number, updatedTransferencia: Transferencia){
      return this.http.put(`${this.API_URI}/transferencia/${id}`, updatedTransferencia);
    }
  
}
