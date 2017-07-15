import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RootComponent } from "./root/root.component";
import { IndexComponent } from "./index/index.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { routing } from "./app.routing.module";

@NgModule({
  imports: [ 
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    IndexComponent,
    RootComponent,
    SigninComponent,
    SignupComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}