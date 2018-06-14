import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';


@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [StarComponent],
  exports: [StarComponent,CommonModule, FormsModule],
  providers:[ConfigService]
})
export class SharedModule { }
