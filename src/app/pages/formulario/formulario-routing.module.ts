import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent } from './formulario.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormularioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
