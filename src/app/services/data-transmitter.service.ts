import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransmitterService {

  private dataSource = new BehaviorSubject(null);
  currentData = this.dataSource.asObservable();

  constructor() {
  }

  transmitData(data: any) {
    this.dataSource.next(data);
  }
}
