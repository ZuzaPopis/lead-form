import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerDataComponent } from './form/broker-data/broker-data.component';

const routes: Routes = [
  {
    path: 'broker-data/:id',
    component: BrokerDataComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
