import { ValueAccessorBase } from './../value.accessor';
import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, AbstractControl } from '@angular/forms';
 /**
  * @description custom input control working through value_accessor, used for displaying custom error messages & additional customization 
  */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }
  ],
})
export class InputComponent extends ValueAccessorBase<string> implements OnInit {
  @Input() controls: AbstractControl;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() title = '';
  @Input() error = '';
  @HostBinding('class.input-container') container = true;
  ngOnInit() {
    console.log('ELEMENT', this.placeholder, this.title);
  }
  constructor() {
    super();
  }
  checkInvalid(): boolean {
    if (this.controls && !this.controls.pristine && !this.controls.valid) {
      return true;
    }
    return false;
  }
}
