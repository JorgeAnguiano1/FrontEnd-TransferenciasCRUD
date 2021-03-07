import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import {ClienteService} from '../../services/cliente.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente : any = {
    idCliente: 0,
    nombre:'',
    apellidoPaterno: '',
    apellidoMaterno: '',
    calle:'',
    numero:0,
    colonia:'',
    cp:0,
    ciudad:'',
    pais:'',
    activo:'',
    fechaRegistro: new Date()
  };

  edit: boolean = false;

  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if(params.id){
      this.clienteService.getCliente(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.cliente = res;
          this.edit = true;
          console.log(this.cliente)
        },
        err => console.error(err)
      )
    }
  }

  crearCliente(){
    delete this.cliente.idCliente;
    delete this.cliente.fechaRegistro;
    this.cliente.activo = 1;

    this.clienteService.createCliente(this.cliente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes'])
      },
      err => console.log(err)
    )
  }

  updateCliente(){
    delete this.cliente.fechaRegistro;

    this.clienteService.updateCliente(this.cliente.idCliente, this.cliente)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/clientes'])
      },
      err => console.log(err)
    )
  }

  deleteCliente(){
    delete this.cliente.fechaRegistro;
    console.log("Entra delete")
    this.clienteService.deleteCliente(this.cliente.idCliente)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/clientes'])
      },
      err => console.log(err)
    )
  }
}
