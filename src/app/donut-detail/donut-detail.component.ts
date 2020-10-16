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
 
  donutDetail: DonutDetail;
  id:number;
  sub:any;

  constructor(private route: ActivatedRoute,
    private donutService: DonutService) { }

  changeDonutId(donutId) {
    this.donutService.setDonutId(this.sub);

    
  }

  ngOnInit(): void {
  this.sub= this.route.params.subscribe(params =>{
    this.id = +params['id'];
  });
    


     //this.donutId = this.donutService.snapshot.paramMap.get('id');
    // this.donutService.queryParams.subscribe((data:Donut )=> this.donut =data );
    


    // this.donutService.getDonut(this.donut.id).subscribe((data: DonutDetail) => this.donutDetail = data);  /// This one works. Just need to get variable into getDontu()

 
  }
  // }
    // });
   // this.Activatedroute.snapshot.queryParamMap.get('id')||0;;
     //this.donutService.getDonut.queryParams.subscribe(params => {let donutId =params['id']; console.log(donutId)});

 
    // console.log('=================INSIDE firstNGONINIT============')
}