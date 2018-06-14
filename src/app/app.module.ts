import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component , APP_INITIALIZER} from '@angular/core';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';

import { ProductModule } from './products/product.module';
import { ConfigService } from './shared/config.service';


import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
      {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'**', redirectTo: 'welcome', pathMatch: 'full'},]),
    ProductModule
  ],
  providers:[
    ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory :ConfigLoader,
    deps:[ConfigService],
    multi:true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(configService: ConfigService) {
    return () => configService.load(environment.configFile); 
  }
