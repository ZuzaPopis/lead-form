import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  apiUrl = 'https://lead-form-ee44b-default-rtdb.europe-west1.firebasedatabase.app/formData.json';

  constructor(private http: HttpClient) { } 

  sendData(formData: any) {
    return this.http.post<any>(this.apiUrl, formData)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
