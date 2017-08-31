import { SurveyElement } from './../../pages/survey/survey.service';
import { BaseComponent } from './../../common/helpers/baseComponent';
import { FormsService } from './../../common/form/forms.service';
import { ObjectMap } from './../../common/helpers/object-map.interface';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
* @description renders top-level element with type "panel" which has input elements inside
* every panel is a form which returns "valid" attribute through 2-way data binding into main SurveyPage component
*/
@Component({
    selector: 'show-panel',
    templateUrl: './show-panel.html'
})
export class ShowPanelComponent extends BaseComponent implements OnInit, OnDestroy {
    @Input('title') title: string;
    @Input('elements') elements: SurveyElement[];
    @Input() valid: boolean;
    @Output() validChange: EventEmitter<boolean> = new EventEmitter<boolean>(true);
    private formErrors: any = {};
    panelForm: FormGroup;

    constructor(
        private fs: FormsService,
        private fb: FormBuilder,
    ) {
        super();
        // this.complete = new EventEmitter<boolean>(true);
    }


    /**
    * @description creating FormGroup based on given elements
    */
    ngOnInit() {
        let formGroup = {};
        this.elements.forEach((element, index) => {
            formGroup[element.name] = ['', this.fs.getValidators(element.isRequired, element.type)];
        })

        this.panelForm = this.fb.group(formGroup);
        this.panelForm.valueChanges
            .subscribe(
            data => this.onValueChange(data)
            );
        this.onValueChange();
    }


    /**
    * @description unsubscribe from all subscriptions
    */
    ngOnDestroy() {
        super.ngOnDestroy();
    }


    /**
    * @description called when any element in form changes value
    */
    private onValueChange(data?) {
        this.formErrors = this.fs.manageErrorTexts(this.panelForm, this.elements, data);
        console.log(this.panelForm.valid, 'FORM VALID?');
        this.validChange.emit(this.panelForm.valid);
    }



}