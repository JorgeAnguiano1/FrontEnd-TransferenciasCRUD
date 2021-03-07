import { Component, OnInit } from '@angular/core';
import {PagadorService} from '../../services/pagador.service';
import {Pagador} from '../../models/pagador';

@Component({
  selector: 'app-pagador-list',
  templateUrl: './pagador-list.component.html',
  styleUrls: ['./pagador-list.component.css']
})
export class PagadorListComponent implements OnInit {

  pagadores: any = [];
  constructor(private pagadorService: PagadorService) { }

  ngOnInit() {
    this.pagadorService.getPagadores().subscribe(
      res => {
        this.pagadores = res;
      },
      err => console.error(err)
    )
  }
}
