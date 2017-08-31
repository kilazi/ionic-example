import { Component, Input } from '@angular/core';
/**
 * @description image renderer
 */
@Component({
    selector: 'show-image',
    templateUrl: './show-image.html'
})
export class ShowImageComponent {
    @Input('text') text: string;
    @Input('image') image: string;
    constructor() {
        console.log('show-image', this.text, this.image);
    }
}