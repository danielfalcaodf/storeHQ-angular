import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HqsRoutingModule } from './hqs-routing.module';
import { HqsComponent } from './hqs.component';


@NgModule({
  declarations: [
    HqsComponent
  ],
  imports: [
    CommonModule,
    HqsRoutingModule,
  ]
})
export class HqsModule { }
