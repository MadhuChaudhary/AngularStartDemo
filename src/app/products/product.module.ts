import { NgModule, APP_INITIALIZER} from '@angular/core';

import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';

import { ProductListComponent } from './product-list.component';

import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../shared/config.service';




@NgModule({
  imports: [
    
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
    {path: 'products/:id', canActivate:[ProductGuardService], component: ProductDetailComponent},]),
    SharedModule, HttpClientModule
    
  ],
  declarations: [ProductListComponent,ConvertToSpacesPipe, ProductDetailComponent],
  providers: [ProductGuardService, ProductService, ConfigService],
})
export class ProductModule { }
