import { Injectable } from '@angular/core';
import { Complete, Example } from 'src/interfaces/Devs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor(private http: HttpClient) { }



  getDevs() {

    return this.http.get<Example>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')


}
}