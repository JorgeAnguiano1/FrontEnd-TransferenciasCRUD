import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

import{ClienteService} from './services/cliente.service';
import { PagadorFormComponent } from './components/pagador-form/pagador-form.component';
import { PagadorListComponent } from './components/pagador-list/pagador-list.component';
import { TransferenciaListComponent } from './components/transferencia-list/transferencia-list.component';
import { TransferenciaFormComponent } from './components/transferencia-form/transferencia-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { Filter3Pipe } from './pipes/filter3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClienteFormComponent,
    ClienteListComponent,
    PagadorFormComponent,
    PagadorListComponent,
    TransferenciaListComponent,
    TransferenciaFormComponent,
    FilterPipe,
    Filter2Pipe,
    Filter3Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
