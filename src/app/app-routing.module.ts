import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@layout/dashboard/dashboard.component';
import { NotfoundComponent } from '@modules/home/notfound/notfound.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:'',loadChildren:()=>import('@modules/home/home.module').then(m=>m.HomeModule)}
  ]},
  {path:'**',component:NotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
