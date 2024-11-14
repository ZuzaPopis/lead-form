import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { advisorDataDTO } from '../dto/advisorDataDTO.dto';

@Injectable({
  providedIn: 'root'
})
export class AdvisorDataService {

  advisorData: advisorDataDTO;

  ADVISOR_DATA_URL = 'https://66e80014b17821a9d9dae645.mockapi.io/api/advisor-data/'

  constructor(private http: HttpClient) { }

  getAdvisorData(brokerId: number): Observable<any> {
    return this.http.get<advisorDataDTO[]>(this.ADVISOR_DATA_URL);
  }
}
