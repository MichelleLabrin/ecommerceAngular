import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () => import('./pages/products/products-list.module').then(m => m.ProductsListModule),
  },

  {
    path: 'pdetail/:id',
    loadChildren: () => import('./pages/pdetail/pdetail.module').then((m) => m.PdetailModule),
  },
  
  {
    path: 'edit-products',
    loadChildren: ()=> import ('./pages/edit-products/edit-products.module') .then((m) => m.EditProductsModule),
  },

  {
    path: 'new-products',
    loadChildren: ()=> import ('./pages/new-products/new-product.module') .then((m) => m.NewProductModule),
  },

  {
    path: 'gallery',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/pages/gallery/gallery.module').then((m) => m.GalleryModule),
  },

  {
    path: 'formulario',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/pages/formulario/formulario.module').then((m) => m.FormularioModule),
  },
  { path: 'productform', loadChildren: () => import('./share/Component/productform/productform-routing.module').then(m => m.ProductformRoutingModule) },
  { path: 'productform', loadChildren: () => import('./share/Component/productform/productform-routing.module').then(m => m.ProductformRoutingModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
