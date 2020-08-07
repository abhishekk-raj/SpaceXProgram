import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() {
  }

  public handleError(error: HttpErrorResponse | any): any {
    let errMsg: string;

    if (error.error instanceof Error) {
      errMsg = error.error.message;
    } else {
      console.log('Error :: HttpProcess :: ', error.error);
      errMsg = error.error;
    }

    return throwError(errMsg);
  }
}
