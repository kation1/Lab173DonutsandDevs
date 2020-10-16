import { Component, OnInit } from '@angular/core';
import { DonutService } from 'src/donut.service';
import { DonutDetail, DonutList } from 'src/interfaces/donuts';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts: DonutList;
  donut:DonutDetail;
  id: number;
  constructor(private donutService: DonutService) { }


  ngOnInit(): void {
    
    this.donutService.getDonuts().subscribe(
      (data: DonutList) => this.donuts = data
    );
    this.donutService.getDonut(5).subscribe((data: DonutDetail) => this.donut = data);
  


  }


}
