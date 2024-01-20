import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataArr: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July'
  ];

  getMonths(): string[] {
    return this.dataArr;
  }
  constructor() { }
}
