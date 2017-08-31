import { HttpService } from './../../common/http.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface Survey {
    elements: any[];
    type: string;
    title: string;
    name: string;
}

// 1. Type (element Type)
// 2. Name (UniqueName of the element)
// 3. Title (Not applicable for element type ‘html’, description which is displayed as heading)
// 4. Visibleif (If not present, we need to display the field)
// 5. isRequired: false ( default true if field not present)
// 6. placeholder: Applicable for fields like text
// 7. startWithNewLine: true or false (if not present, it will always be true)
// 8. isLocked: true (default is false)

export interface VisibleIf {
    elementName: string,
    condition: [string, 'Y'|'N']
}

export interface SurveyElement {
    type: string,
    name: string,
    title?: string,
    visibleIf?: VisibleIf,
    isRequired?: boolean,
    placeholder?: string,
    startWithNewLine?: boolean,
    isLocked?: boolean
}

@Injectable()
export class SurveyService {
    constructor(
        private http: HttpService
    ) {}

    public getSurvey(id): Observable<Survey> {
        return this.http.get('Survey' + id + '.json');
    }

    public panelComplete(panelId: number, elements: any[]): void {
        console.log('panelComplete', panelId, elements);
    }
}