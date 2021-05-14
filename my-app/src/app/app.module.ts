import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MyLibModule } from 'my-lib';
import { PrimeiroModule } from './primeiro/primeiro.module';
import { SegundoModule } from './segundo/segundo.module';
import { AwesomeTimeModule } from 'my-lib/awesome-time';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PrimeiroModule,
    SegundoModule,
    MyLibModule,
    // AwesomeTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }