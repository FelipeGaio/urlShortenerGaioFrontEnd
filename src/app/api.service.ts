import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Shortener } from './shortener';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
  })
};

const apiUrl = "http://localhost:4200/api/api/shortener";


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  addShortener (shortener): Observable<Shortener> {
    return this.http.post<Shortener>(apiUrl, shortener, httpOptions).pipe(
      tap(
        (shortener: Shortener) => console.log(shortener)
        ),
      catchError(this.handleError<Shortener>('addShortener'))
    );
  }


}
