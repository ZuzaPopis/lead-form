import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrokerFormComponent } from './form-data/broker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [BrokerFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
