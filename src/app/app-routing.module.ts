import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevsComponent } from './devs/devs.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';

const routes: Routes = [
  {path: 'donuts', component:DonutsComponent},
  {path: 'donut', component:DonutDetailComponent},
  {path: 'devs', component:DevsComponent},

]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
