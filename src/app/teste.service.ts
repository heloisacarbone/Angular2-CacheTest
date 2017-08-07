import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class TesteService {
  private cache: Observable<any>;

  constructor(private http: Http) {

  }

  getTeste(): Observable<any> {
    if (!this.cache) {
      this.cache = this.http
                      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
                      .map((res) => {
                        return res.json();
                      })
                      .publishLast()
                      .refCount();
    }

    return this.cache;
  }
}
