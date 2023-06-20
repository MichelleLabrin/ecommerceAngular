import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from './new-products.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: NewProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductsRoutingModule { }
