import { Observable } from 'rxjs/Observable';
import { Http, RequestOptionsArgs, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { baseUrl, apiVersion } from './environment';
/**
 * @description main http handler. in future has to handle authorisation
 */
@Injectable()
export class HttpService {
    constructor(
        private http: Http
    ) { }

    public get(url: string, options?: RequestOptionsArgs, ignoreBaseUrl: boolean = false): Observable<any> {
        return new Observable(observer => {
            console.log('Call GET Request: ' + this._generateUrl(url, ignoreBaseUrl), options);
            this.http.get(this._generateUrl(url, ignoreBaseUrl), options)
                .map(this._extractData)
                .catch((err: any) => {
                    return this._handleError(err);
                }).subscribe(res => {
                    console.log('Call GET Response: ' + url, res);
                    observer.next(res);
                }, err => {
                    console.log('Call GET Error: ' + url, err);
                    observer.error(err.json());
                })
        })
    }

    public post() {
        //placeholder
    }

    public put() {
        //placeholder
    }

    public delete() {
        //placeholder
    }

    public patch() {
        //placeholder
    }


    private _generateUrl(url, ignoreBaseUrl = false): string {
        if (ignoreBaseUrl) {
            return `${baseUrl}/${url}`;
        }
        return `${baseUrl}/${apiVersion}/${url}`;
    }

    private _prepareRequest(options: RequestOptionsArgs = {}): RequestOptionsArgs {
        let params: any = options.params;
        if (params) {
            options.params = this._prepareUrlParams(params);
        }
        options = this._createBaseHeader(options);

        // TODO: uncomment when will be implementing authorization
        // options = this._createAuthorizationHeader(options);

        return options;
    }

    private _extractData(res: any): any {
        if (res.status === 204 || !res._body) {
            return {};
        }
        let body = res.json();
        // let body = res;
        let total = res.headers.get('X-Total-Count');

        if (total) {
            return { total, data: body };
        }
        return body || {};
    }

    private _handleError(err): Observable<any> {
        console.log('handleError', err);
        if (err.status >= 500) {
            this._handleServerError();
            return Observable.throw(null);
        }
        switch (err.status) {
            case 401:
                this._handleUnauthorized();
                break;
            case 404:
                this._handleNotFound();
                break;
            case 0:
                this._handleServerError();
                return Observable.throw(null);
            default:
                return Observable.throw(err);
        }
        return Observable.throw(err);
    }

    private _createBaseHeader(options: any = {}): Headers {
        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        return options;
    }

    private _createAuthorizationHeader(options: RequestOptionsArgs = {}): RequestOptionsArgs {
        if (!options.headers) {
            options.headers = new Headers();
        }


        //placeholder (get token here put it into Authorization of headers)
        return options;
    }

    private _prepareUrlParams(options: URLSearchParams): URLSearchParams {
        if (options instanceof URLSearchParams) {
            return options;
        }

        const params = new URLSearchParams();

        Object.keys(options).map((key) => {
            params.set(key, options[key]);
        });

        return params;
    }

    private _handleServerError(): void {
        console.error('Server error');
        // placeholder (handle server error here)
    }

    private _handleUnauthorized(): void {
        console.error('Unauthorized error');
        // placeholder (handle unauthorized here)
    }

    private _handleNotFound(): void {
        console.error('Not found error');
        // placeholder (handle wrong page here)
    }
}