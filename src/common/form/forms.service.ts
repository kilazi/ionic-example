import { SurveyElement } from './../../pages/survey/survey.service';
import { ObjectMap } from './../helpers/object-map.interface';
import { Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
/**
 * @description manages errors and specific error messages for input elements
 */
@Injectable()
export class FormsService {
    /**
    * @description regex patterns for form input validations
    */
    private regexes: ObjectMap<RegExp> = {
        email: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
        tel: /(\d){10}$/
    }


    /**
    * @description validators for different types of inputs
    */
    private validators: ObjectMap<Validators[]> = {
        email: <Validators[]>[Validators.minLength(4), Validators.pattern(this.regexes['email'])],
        required: <Validators[]>[Validators.required],
        tel: <Validators[]>[Validators.pattern(this.regexes['tel'])]
    }

    /**
    * @description default messages for different types of errors (not passed validators)
    */
    private errorMessages = {
        'required': 'required',
        'minlength': 'too short',
        'pattern': 'incorrect'
    }

    /**
    * @description specific messages for input types and patterns
    */
    private specificErrorMessages = {
        tel: {
            pattern: "Phone number should be in 10-digit format (e.g. 7779991111)"
        }
    }

    /**
     * @description gets validators, depends on parameters of element
     */
    public getValidators(required: boolean, type: string): Array<Validators> {
        let validators = [];
        if (required) validators = validators.concat(this.validators['required']);
        if (this.validators[type]) validators = validators.concat(this.validators[type]);
        return validators;
    }


    /**
    * @description onValueChange function to change form message depending on error
    */
    public manageErrorTexts(form: FormGroup, elements: Array<SurveyElement>, data: ObjectMap<string>): ObjectMap<string> {
        let formErrors = {};
        elements.forEach(element => {
            const control: AbstractControl = form.get(element.name);
            if (control.dirty && !control.valid) {
                for (const error in control.errors) {
                    let errorText = '';
                    if (this.specificErrorMessages[element.type] && this.specificErrorMessages[element.type][error]) {
                        errorText = this.specificErrorMessages[element.type][error];
                    } else if (control.errors.hasOwnProperty(error)) {
                        errorText = element.title.slice(0, element.title.length - 1) + ' is ' + this.errorMessages[error] + ' ';
                    }
                    formErrors[element.name] = errorText;
                }
            }
        })

        return formErrors;
    }

};
