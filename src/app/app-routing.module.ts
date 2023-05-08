import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    { path: '', component: ListComponent },
    { path: 'view/:name', component: DetailsComponent },
    { path: '**', component: ListComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
