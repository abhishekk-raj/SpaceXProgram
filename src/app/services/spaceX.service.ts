import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPrograms } from '../models/programs.model';
import { catchError, tap } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private readonly baseUrl: string = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient, private processHttpMsg: ProcessHttpmsgService) {
  }

  public getSpaceXPrograms(): Observable<IPrograms | any> {
    return this.http.get<IPrograms>(this.baseUrl)
    .pipe(
      tap((data: IPrograms) => {
        console.log(data);
      }),
      catchError(error => {
        return this.processHttpMsg.handleError(error);
      })
    );
  }
}
