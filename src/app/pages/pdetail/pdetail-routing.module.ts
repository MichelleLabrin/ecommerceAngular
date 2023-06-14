import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PdetailComponent } from './pdetail.component';

const routes: Routes = [
  {
    path: 'pdetail/:id',
    pathMatch: 'full',
    component: PdetailComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdetailRoutingModule { }
