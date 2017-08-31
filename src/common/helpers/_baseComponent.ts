import { Subject } from 'rxjs/Subject';
import { OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
/**
 * @description DEPRECATED, see baseComponent.ts
 */
export class BaseComponent implements OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
