import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-broker-data',
  templateUrl: '../broker-data/broker-data.component.html',
})
export class BrokerDataComponent implements OnInit {
  paramsId: number; 

  constructor(private route: ActivatedRoute) {} 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramsId = params['id']
    });
  }

  onChangeParams() {
    console.log(typeof this.paramsId);
    this.paramsId = Number(this.paramsId) + 1;

    // this.route.params.subscribe(params => {
    //   params['id'] = this.paramsId
    // });
  }
}
