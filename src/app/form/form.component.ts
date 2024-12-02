import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { advisorDataDTO } from '../dto/advisorDataDTO.dto';
import { brokerDataDTO } from '../dto/brokerDataDTO.dto';
import { AdvisorDataService } from '../services/advisor-data.service';
import { BrokerDataService } from '../services/broker-data.service';
import { DataServiceService } from '../services/data-service.service';
import { ZipCodeValidator } from '../validators/zip-code-validator.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    financingMethods = ['Leasing operacyjny', 'Leasing finansowy', 'Leasing konsumencki', 'Pożyczka'];
    leadForm: FormGroup;
    apiUrl = 'https://lead-form-ee44b-default-rtdb.europe-west1.firebasedatabase.app/formData.json';
    errorMsg: string = '';
    brokerId: number;
  
    constructor(
      private dataService: DataServiceService,
      private brokerDataService: BrokerDataService,
      private advisorDataService: AdvisorDataService) { }
  
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
          clientZipCode: new FormControl(null, [Validators.required, ZipCodeValidator()]),
        }),
        itemData: new FormGroup({
          itemName: new FormControl(null, Validators.required),
          itemNetPrice: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
          itemFinancingMethod: new FormControl(null, Validators.required),
          itemFinancingPeriod: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
          ownShare: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
          itemFinalValue: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
          itemProductionYear: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
          expectedSalary: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
        }),
      })
  
     // this.brokerId = Math.floor(Math.random() * 65);
      this.assignBrokerData();
      // this.assignAdvisorData();
    }
  
    assignBrokerData() {
      this.brokerDataService.getBrokerData(this.brokerId)
        .subscribe({
          next: (data: brokerDataDTO) => {
            console.log(data);
  
          // let brokerData = data;
          //  this.brokerId = data.id;
  
            this.leadForm.patchValue(data
              // {
              //   brokerData: {
              //     brokerName: data.name,
              //     brokerPhone: data.phone,
              //     brokerEmail: data.email,
              //     brokerRegNo: data.regNo
              //   }
              // }
            );
          },
          error: (error: HttpErrorResponse) => {
            console.error(error.message);
          },
          complete: () => {
            console.log('complete');
          }
        });
    }
  
    // assignAdvisorData() {
    //   this.advisorDataService.getAdvisorData(this.brokerId)
    //     .subscribe({
    //       next: (data: advisorDataDTO[]) => {
    //         let advisorData = data[0];
  
    //         this.leadForm.patchValue(
    //           {
    //             advisorData: {
    //               advisorName: advisorData.name,
    //               advisorEmail: advisorData.email
    //             }
    //           }
    //         );
    //       }
    //     });
    // }
  
    // get clientZipCode() {
    //   return this.leadForm.get('clientData.clientZipCode');
    // }
    
    // onChangeParams(paramsId: number) {
    //   this.brokerId = paramsId + 1
    // }
  
  
    onSubmit() {
      // this.dataService.sendData(JSON.stringify(this.leadForm.value))
      //   .subscribe({ 
      //     next: null,
      //     error => {
      //       this.errorMsg = error.message;
      //     }

      //   }
      //   );
      console.log(this.leadForm)
    }
}
