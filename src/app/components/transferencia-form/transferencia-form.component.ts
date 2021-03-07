import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {PagadorService} from '../../services/pagador.service';
import {TransferenciaService} from '../../services/transferencia.service';
import { Transferencia } from 'src/app/models/transferencia';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {

  remitente : boolean = false;
  beneficiario : boolean = false;
  pagador : boolean = false;

  seleccionarRemitente: boolean = false;
  seleccionarBeneficiario: boolean = false;
  seleccionarPagador: boolean = false;

  clientes: any = [];
  pagadores: any = [];

  transferencia : Transferencia = {
    idTransferencia: 0,
    idRemitente: 0,
    idBeneficiario: 0,
    idPagador: 0,
    monto: 0,
    comision: null,
    estado: 'Disponible',
    fechaTramitado: new Date,
    nombreRemitente:'',
    nombreBeneficiario: '',
    nombrePagador: ''
  };

  constructor(private clienteService: ClienteService, private pagadorService: PagadorService, private transferenciaService: TransferenciaService, private router:Router) { }

  filterClientes = '';
  filterClientes2 = '';
  filterPagadores = '';
  

  ngOnInit() {
    console.log(this.remitente);
    console.log(this.beneficiario);
    console.log(this.pagador);

    this.clienteService.getClientes()
    .subscribe(
      res =>{
        this.clientes = res;
      },
      err => console.error(err)
    )

    this.pagadorService.getPagadores()
    .subscribe(
      res =>{
        this.pagadores = res;
        console.log(this.pagadores)
      },
      err => console.error(err)
    )
  }

  buscarRemitente(){
    this.seleccionarRemitente = !this.seleccionarRemitente;
  }

  buscarBeneficiario(){
    this.seleccionarBeneficiario = !this.seleccionarBeneficiario;
  }

  buscarPagador(){
    this.seleccionarPagador = !this.seleccionarPagador;
  }

  obtenerRemitente(id: string){
    this.transferencia.idRemitente = parseInt(id);
    console.log(this.transferencia.idRemitente);
    this.remitente = true;
    this.seleccionarRemitente = false;
  }

  obtenerBeneficiario(id: string){
    this.transferencia.idBeneficiario = parseInt(id);
    console.log(this.transferencia.idBeneficiario);
    this.beneficiario = true;
    this.seleccionarBeneficiario = false;
  }

  obtenerPagador(id: string){
    this.transferencia.idPagador = parseInt(id);
    console.log(this.transferencia.idPagador);
    this.pagador = true;
    this.seleccionarPagador = false;
  }

  crearTransferencia(){
    delete this.transferencia.idTransferencia;
    delete this.transferencia.nombreRemitente;
    delete this.transferencia.nombreBeneficiario;
    delete this.transferencia.nombrePagador;
    delete this.transferencia.fechaTramitado;
    this.transferencia.comision = this.transferencia.monto * 0.15;
    

    console.log("Transferencia: ",this.transferencia);

    this.transferenciaService.createTransferencia(this.transferencia)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/transferencias']);
      },
      err => console.log(err)
    )

  }

}
