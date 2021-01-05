import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloPipe } from './pipes/titulo.pipe';
import { OrdenamientoConPipesPipe } from './pipes/ordenamiento-con-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TituloPipe,
    OrdenamientoConPipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
