import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-broker-form',
  templateUrl: './broker-form.component.html',
})
export class BrokerFormComponent implements OnInit {
  paramsId: number; 


  constructor(private route: ActivatedRoute) {} 
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramsId = params['id']
    })
  }

  onChangeParams() {
    this.paramsId = this.paramsId + 1;
  }
}
