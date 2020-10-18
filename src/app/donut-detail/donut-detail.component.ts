import { Component, Input, OnInit } from '@angular/core';
import { DonutService, } from 'src/donut.service';
import { Donut, DonutDetail, DonutList } from 'src/interfaces/donuts';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
})



export class DonutDetailComponent implements OnInit {
  selectedDonut: Donut;
  donutDetail: DonutDetail;


  constructor(private route: ActivatedRoute,
    private donutService: DonutService) { }

  // changeDonutId(donutId) {
  //   this.donutService.setDonutId(this.sub);


  // }

  ngOnInit(): void {
    {
      this.route.queryParams.subscribe((data: Donut) => this.selectedDonut = data);
      
     console.log(this.selectedDonut)


      this.donutService.getDonut(this.selectedDonut.ref).subscribe((data: DonutDetail) => this.donutDetail = data);  /// This one works. Just need to get variable into getDontu()

      console.log('donut-detail ngOnINit')

    }

  }
}