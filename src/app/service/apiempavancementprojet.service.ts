


import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiempavancementprojetService {
  baseUri: string = 'http://localhost:4000/empapiavancementprojet';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createavancementprojet(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all avancementprojets
  getavancementprojets() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get avancementprojet
  getavancementprojet(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update avancementprojet
  updateavancementprojet(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete avancementprojet
  deleteavancementprojet(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}