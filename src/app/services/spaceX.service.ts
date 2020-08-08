import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPrograms } from '../models/programs.model';
import { catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private readonly baseUrl: string = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient, private processHttpMsg: ProcessHttpmsgService) {
  }

  public getSpaceXPrograms(launchSuccess: boolean, landSuccess: boolean, launchYear: string): Observable<IPrograms | any> {
    return this.http.get<IPrograms>(this.getAPIUrl(launchSuccess, landSuccess, launchYear))
    .pipe(
      catchError(error => {
        return this.processHttpMsg.handleError(error);
      })
    );
  }

  private getAPIUrl(launchSuccess: boolean, landSuccess: boolean, launchYear: string): string {
    return `${ this.baseUrl }${ launchSuccess !== undefined ? `&launch_success=${ launchSuccess }` : '' }${ landSuccess !== undefined ? `&land_success=${ landSuccess }` : '' }${ launchYear !== undefined ? `&launch_year=${ launchYear }` : '' }`;
  }
}
