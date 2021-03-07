import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //chido
  transform(value: any, ...arg: any): any {
    if(arg === '') return value;
    const resultadoClientes = [];
    for(const cliente of value){
      if(cliente.nombre.toLowerCase().indexOf(arg) > -1){
        resultadoClientes.push(cliente)
      }
    }
    return resultadoClientes;
  }

}
