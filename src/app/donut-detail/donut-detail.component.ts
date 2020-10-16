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
  donutId = "";
  donut:DonutDetail;
  activatedRoute: DonutService;
  donuts:DonutList;

  constructor(private Activatedroute: ActivatedRoute,
    private donutService: DonutService) { }

  changeDonutId(donutId) {
    this.donutService.setDonutId(donutId);

    
  }

  
  @Input() id;
  ngOnInit(): void {

    


     //this.donutId = this.donutService.snapshot.paramMap.get('id');
    // this.donutService.queryParams?.subscribe(params => {
    //   this.donutId = params['item.id']; console.log(this.id);
    // })


    this.donutService.getDonut(this.donutId).subscribe((data: DonutDetail) => this.donut = data);  /// This one works. Just need to get variable into getDontu()

 
  // }
    // });
   // this.Activatedroute.snapshot.queryParamMap.get('id')||0;;
     //this.donutService.getDonut.queryParams.subscribe(params => {let donutId =params['id']; console.log(donutId)});

 
    // console.log('=================INSIDE firstNGONINIT============')
}}