import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filtros';

  nombreEmpresa = 'marketing digital';
  titulo = 'paquetes';
  fecha = new Date();

  // paquetes = {titulo : 'Básico', precio : 100 , mes: 'mes', d1: ' Redes Sociales', d2: 'Branding', d4: 'Diseño de imagen'};

  paquetes = [
    {
      titulo : 'Básico', 
      precio : 100 , 
      mes: 'mes', 
      d1: ['Redes Sociales', 'Branding','Diseño de imagen', '-' ], 
      // d1: ' Redes Sociales',
      // d2: 'Branding', 
      // d3: 'Diseño de imagen', 
      // d4: '-'
    },
    {
      titulo : 'Recomendado', 
      precio : 200 , 
      mes: 'mes', 
      d1: ['Redes Sociales', 'Video', 'Diseño de imagen', 'Dominio Gratis 1 año'],
      // d1: ' Redes Sociales', 
      // d2: 'Branding', 
      // d3: 'Video', 
      // d4: 'Diseño de imagen'
    },
    {
      titulo : 'Avanzado', 
      precio : 300 , 
      mes: 'mes', 
      d1: ['Redes Sociales', 'Branding','Imagen/Video', 'Comunity Manager' ],
      // d1: ' Redes Sociales', 
      // d2: 'Branding', 
      // d3: 'Imagen/Video', 
      // d4: 'Comunity Manager'
    },
  ]
}
