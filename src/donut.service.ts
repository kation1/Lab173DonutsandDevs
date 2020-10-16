import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Donut, DonutDetail, DonutList } from './interfaces/donuts'
import { DonutDetailComponent } from './app/donut-detail/donut-detail.component';

@Injectable({
  providedIn: 'root'

})
export class DonutService {
 
  donutsURL: 'https://grandcircusco.github.io/demo-apis/donuts.json';
  donutDetailURL: 'https://grandcircusco.github.io/demo-apis/donuts/INSERT_ID_HERE.json'  // this need variable
  myDonutId: number;
  donuts: DonutList;
  queryParams: any;
  snapshot: any;
  setDonutId(donutId) { return this.myDonutId = donutId; }

  constructor(private http: HttpClient) { }
  getDonuts() {
    return this.http.get<DonutList>('https://grandcircusco.github.io/demo-apis/donuts.json')
  }
  getDonut(id) {
    return this.http.get<DonutDetail>(('https://grandcircusco.github.io/demo-apis/donuts/' + id + '.json'))
  }

}

