import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
export function catchError(e, type): Observable<any> {
    let error_text = 'server error occured';
    try {
        e = e.json();
        error_text = e.errorMsg;
    } catch (e) { }
    return Observable.of({
        type: type,
        payload: error_text
    });
};
