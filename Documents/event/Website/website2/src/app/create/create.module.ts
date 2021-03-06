import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }