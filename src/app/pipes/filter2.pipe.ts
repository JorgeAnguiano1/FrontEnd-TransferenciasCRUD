import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoClientes = [];
    for(const cliente of value){
      if(cliente.nombre.toLowerCase().indexOf(arg) > -1){
        resultadoClientes.push(cliente)
      }
    }
    return resultadoClientes;
  }

}
