import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoPagadores = [];
    for(const pagador of value){
      if(pagador.nombre.toLowerCase().indexOf(arg) > -1){
        resultadoPagadores.push(pagador)
      }
    }
    return resultadoPagadores;
  }

}
