import { Component, OnInit } from '@angular/core';
import { DevService } from 'src/app/dev.service';
import {  Complete, Example } from 'src/interfaces/devs';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {
complete: Complete;

example : Example;



  constructor(private devService: DevService) { }

  ngOnInit(): void {
  console.log('Devs ngOnit')
    this.devService.getDevs().subscribe(
      (data:Example) => this.example=  data
    );
      
        console.log(this.example)
  }

}
