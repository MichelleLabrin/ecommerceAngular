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
    loadChildren: () => import('./pages/product/products-list.module').then(m => m.ProductsListModule),
  },

  {
    path: 'products/:id',
    pathMatch: 'full',
    loadChildren: () => import('./pages/pdetail/pdetail.module').then((m) => m.PdetailModule),
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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
