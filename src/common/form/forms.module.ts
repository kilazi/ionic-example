import { FormsService } from './forms.service';
import { InputComponent } from './input.component/input.component';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NgModule, forwardRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent,
    FormsModule
  ],
  providers: [
      FormsService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppFormsModule { }
