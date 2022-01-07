import { HqComponent } from './hq/hq.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HqsComponent } from './hqs.component';

const routes: Routes = [{ path: 'list', component: HqsComponent }, { path: 'hq', component: HqComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HqsRoutingModule { }
