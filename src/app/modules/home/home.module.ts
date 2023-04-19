import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { SharedModule } from '@shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
