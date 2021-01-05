import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenamientoConPipes'
})
export class OrdenamientoConPipesPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((b,a) => {
        if(a < b){
          return -1;
        }
        if(b < a) {
          return 1;
        }
        
          return 0;
        
    });
  }

}
