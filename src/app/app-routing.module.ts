import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import { PagadorListComponent } from './components/pagador-list/pagador-list.component';
import { PagadorFormComponent } from './components/pagador-form/pagador-form.component';
import {TransferenciaListComponent} from './components/transferencia-list/transferencia-list.component';
import {TransferenciaFormComponent} from './components/transferencia-form/transferencia-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClienteListComponent
  },
  {
    path: 'clientes/agregar',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/editar/:id',
    component: ClienteFormComponent
  },
  {
    path: 'pagadores',
    component: PagadorListComponent
  },
  {
    path: 'pagadores/agregar',
    component: PagadorFormComponent
  },
  {
    path: 'pagadores/editar/:id',
    component: PagadorFormComponent
  },
  {
    path: 'transferencias',
    component: TransferenciaListComponent
  },
  {
    path: 'transferencias/agregar',
    component: TransferenciaFormComponent
  },
  {
    path: 'transferencias/editar/:id',
    component: TransferenciaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
