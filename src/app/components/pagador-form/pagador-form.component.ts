import { Component, OnInit } from '@angular/core';
import { Pagador } from 'src/app/models/pagador';
import {PagadorService} from '../../services/pagador.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-pagador-form',
  templateUrl: './pagador-form.component.html',
  styleUrls: ['./pagador-form.component.css']
})
export class PagadorFormComponent implements OnInit {

  pagador : any = {
    idPagador: 0,
    nombre:'',
    calle:'',
    numero:0,
    colonia:'',
    cp:0,
    ciudad:'',
    pais:'',
    activo:'',
    fechaRegistro: new Date()
  };

  editPagador: boolean = false;
  constructor(private pagadorService:PagadorService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if(params.id){
      this.pagadorService.getPagador(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.pagador = res;
          this.editPagador = true;
          console.log(this.editPagador)
        },
        err => console.error(err)
      )
    }
  }

  crearPagador(){
    delete this.pagador.idPagador;
    delete this.pagador.fechaRegistro;

    this.pagador.activo = 1;

    this.pagadorService.createPagador(this.pagador)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pagadores']);
      },
      err => console.log(err)
    )
  }

  updatePagador(){
    delete this.pagador.fechaRegistro;

    this.pagadorService.updatePagador(this.pagador.idPagador, this.pagador)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/pagadores'])
      },
      err => console.log(err)
    )
  }

  deletePagador(){
    delete this.pagador.fechaRegistro;
    console.log("Entra delete")
    this.pagadorService.deletePagador(this.pagador.idPagador)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/pagadores'])
      },
      err => console.log(err)
    )
  }
}
