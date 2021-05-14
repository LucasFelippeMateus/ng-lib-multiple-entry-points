import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from './primeiro.component';



@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimeiroComponent
  ],
})
export class PrimeiroModule { }
