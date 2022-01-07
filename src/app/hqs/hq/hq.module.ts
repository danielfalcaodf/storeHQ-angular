import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HqComponent } from './hq.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HqComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [HqComponent]
})
export class HqModule { }
