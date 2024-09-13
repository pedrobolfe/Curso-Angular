import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    const values = value.split(" ");
    let result = "";

    for (let i of values) {
      result += this.convertCapitalize(i)+" ";
    }
    return result;
  }

  convertCapitalize(valor: string): string {
    return valor.substring(0, 1).toUpperCase() + valor.substring(1).toLowerCase();
  }

}
