import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RoutingModule } from '../routing.module';
import { App } from '../app.routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RoutingModule,
    App.RoutingModule
  ]
})
export class AppModule { }
