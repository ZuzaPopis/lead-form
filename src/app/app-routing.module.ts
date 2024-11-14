import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerFormComponent } from './form-data/broker-form.component';

const routes: Routes = [
  {
    path: 'broker-form/:id',
    component: BrokerFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
