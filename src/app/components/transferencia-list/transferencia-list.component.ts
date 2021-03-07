import { Component, OnInit } from '@angular/core';
import {TransferenciaService} from '../../services/transferencia.service'

@Component({
  selector: 'app-transferencia-list',
  templateUrl: './transferencia-list.component.html',
  styleUrls: ['./transferencia-list.component.css']
})
export class TransferenciaListComponent implements OnInit {

  transferencias : any = [];
  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    this.transferenciaService.getTransferencias()
    .subscribe(
      res =>{
        this.transferencias = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
