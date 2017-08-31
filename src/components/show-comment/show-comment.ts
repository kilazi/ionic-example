import { Component, Input } from '@angular/core';
/**
 * @description text elements renderer
 */
@Component({
    selector: 'show-comment',
    templateUrl: './show-comment.html'
})
export class ShowCommentComponent {
    @Input('text') text: string;
    constructor() {}    
}