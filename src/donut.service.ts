import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Donut, DonutDetail, DonutList } from './interfaces/donuts'
import { DonutDetailComponent } from './app/donut-detail/donut-detail.component';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'

})
export class DonutService {

  constructor(private http: HttpClient) { }
  getDonuts() {
    return this.http.get<DonutList>('https://grandcircusco.github.io/demo-apis/donuts.json')
  }
  getDonut(ref) {
    return this.http.get<DonutDetail>(ref);
    //return this.http.get<DonutDetail>(('https://grandcircusco.github.io/demo-apis/donuts/' + id + '.json'))
  }

}

