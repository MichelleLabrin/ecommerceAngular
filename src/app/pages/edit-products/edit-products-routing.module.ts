import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductsComponent } from './edit-products.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: EditProductsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductsRoutingModule { }
