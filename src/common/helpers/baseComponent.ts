import { Subscription } from 'rxjs';
/**
 * @description base component for unsubscribing from all events on component destroy
 */
export class BaseComponent {
  private subsArray: Subscription[] = [];

  public get subs(): Subscription|Subscription[] {
    return this.subsArray;
  }

  public set subs(sub: Subscription|Subscription[]) {
    if (sub && (sub instanceof Subscription)) {
      this.subsArray.push(sub);
    } else if (sub instanceof Array) {
      this.subsArray = this.subsArray.concat(sub);
    }
  }

  public ngOnDestroy() {
    this.unsubscribeAll();
  }

  protected unsubscribe(sub: Subscription) {
    let idx = this.subsArray.indexOf(sub);

    if (idx >= 0) {
      this.subsArray[idx].unsubscribe();
      this.subsArray.splice(idx, 1);
    }
  }

  protected unsubscribeAll() {
    for (let sub of this.subsArray) {
      if (sub) {
        sub.unsubscribe();
      }
    }
    this.subsArray = [];
  }
}
