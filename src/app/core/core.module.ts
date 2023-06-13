import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    ComponentsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],

  exports: [
    NavBarComponent,
    FooterComponent,
  ]

})
export class CoreModule { }
