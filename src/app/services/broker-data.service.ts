import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { brokerDataDTO } from '../dto/brokerDataDTO.dto';

@Injectable({
  providedIn: 'root'
})
export class BrokerDataService {

  brokerData: brokerDataDTO;

  BROKER_DATA_URL = 'https://66e80014b17821a9d9dae645.mockapi.io/api/broker-data/'

  constructor(private http: HttpClient) { }

  getBrokerData(brokerId: number): Observable<any> {
    return this.http.get<brokerDataDTO>(this.BROKER_DATA_URL + brokerId);
  }

}
