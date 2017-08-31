import { Component, Input } from '@angular/core';
/**
 * @description html markup renderer
 */
@Component({
    selector: 'show-html',
    templateUrl: './show-html.html'
})
export class ShowHtmlComponent {
    @Input('html') html:string;
    constructor() {}

}