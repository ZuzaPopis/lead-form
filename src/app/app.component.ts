import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  financingMethods = ['Leasing operacyjny', 'Leasing finansowy', 'Leasing konsumencki', 'Pożyczka'];
  leadForm: FormGroup;
  apiUrl = 'https://lead-form-ee44b-default-rtdb.europe-west1.firebasedatabase.app/formData.json';
  errorMsg: string = '';

  constructor(private dataService: DataServiceService) { } 

  ngOnInit() {
    this.leadForm = new FormGroup({
      brokerData: new FormGroup({
        brokerName: new FormControl(null, Validators.required),
        brokerPhone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        brokerEmail: new FormControl(null, [Validators.required, Validators.email]),
        brokerRegNo: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
      }),
      advisorData: new FormGroup({
        advisorName: new FormControl(null, Validators.required),
        advisorEmail: new FormControl(null, [Validators.required, Validators.email]),
      }),
      clientData: new FormGroup({
        clientName: new FormControl(null, Validators.required),
        clientRegNo: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        clientPhone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        clientZipCode: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
      }),
      itemData: new FormGroup({
        itemName: new FormControl(null, Validators.required),
        itemNetPrice: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        itemFinancingMethod: new FormControl(null, Validators.required),
        itemFinancingPeriod: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        ownShare: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        itemFinalValue: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        itemProductionYear: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        expectedSalary: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]), // ustalić dla kogo to wynagrodzenie 
      }),
    })
  }

  //validatePattern(control: FormControl): { [s: string] : boolean } {
  //  let zipCodePattern = '/^[0-9-]{2}(?:-[0-9]{3})?$/';
  //  return control.value.test(zipCodePattern) ? null : { 'wrongZipCodePattern' : true };
  //}


  onSubmit() { 
    this.dataService.sendData(JSON.stringify(this.leadForm.value))
      .subscribe(
        null,
        error => {
          this.errorMsg = error.message;
        }
    );
    console.log(this.leadForm)
  }
 
}
