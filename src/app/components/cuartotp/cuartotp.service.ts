import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MontecarloBody } from './helpers/MontecarloBody';

@Injectable({ providedIn:'root' })
export class ComponentService {
    baseUrl: string = environment.url;

    constructor (private http: HttpClient) {}

    setSimulation = (requestBody: MontecarloBody): Observable<any> => {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(requestBody);
        console.log(body);
        return this.http.post(this.baseUrl, body, { headers: headers });
    }
}
