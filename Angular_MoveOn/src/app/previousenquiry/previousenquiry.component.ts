import { Component, OnInit } from '@angular/core';
import { AllqouteService } from '../allqoute.service';

@Component({
  selector: 'app-previousenquiry',
  templateUrl: './previousenquiry.component.html',
  styleUrls: ['./previousenquiry.component.css']
})
export class PreviousenquiryComponent implements OnInit {

  constructor(public aq:AllqouteService) { }

  qoute:any[]=[];

  ngOnInit(): void {
    this.aq.getallData().subscribe((data:any)=>{
      this.qoute=data;
    })
  }

  getallData()
  {
    this.aq.getallData().subscribe((data:any)=>{
    this.qoute=data;
  })}

  getdomesticData()
  {
    this.aq.getdomesticData().subscribe((data:any)=>{
      this.qoute=data;
    })
  }

  getinternationalData()
  {
    this.aq.getinternationalData().subscribe((data:any)=>{
      this.qoute=data;
    })
  }



}
