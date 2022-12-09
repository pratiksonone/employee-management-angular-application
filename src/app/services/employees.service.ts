import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  url = 'http://localhost:3000/employees';
  statusCode: any;

  constructor(private http: HttpClient, private router: Router) {}

  getEmployeesData(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }
  deleteEmployee(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: any;
    if (err.error instanceof ErrorEvent) {
      errorMessage = err;
    } else {
      errorMessage = err;
    }
    return throwError(() => errorMessage);
  }
}
