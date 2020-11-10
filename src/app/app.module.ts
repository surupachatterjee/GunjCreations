import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserServiceClient } from "./services/userServiceClient";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [UserServiceClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
