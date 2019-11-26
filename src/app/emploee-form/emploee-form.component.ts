import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emploee-form',
  templateUrl: './emploee-form.component.html',
  styleUrls: ['./emploee-form.component.css']
})
export class EmploeeFormComponent implements OnInit {
  personalDetails: FormGroup;
  educationDetails: FormGroup;
  clientDetails: FormGroup;
  vendorDetails: FormGroup;
  benefitsList: string[] = ['PTO', 'M.Ins', 'Reloc'];
  // toppings = new FormControl();
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  marital = ['single', 'married', 'divorced', 'widowed'];
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      visaStatus: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      personalEmail: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: this.formBuilder.group({
        street1: ['', Validators.required],
        street2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required]
      }),
      birthDate: ['', Validators.required],
      ssn: ['', Validators.required]
    });
    this.educationDetails = this.formBuilder.group({
      highestQualification: ['', Validators.required],
      compensation: ['', Validators.required],
      annualSalary:  ['', Validators.required],
      salaryMode: ['', Validators.required],
      benefits : ['', Validators.required]
    });

    this.clientDetails = this.formBuilder.group({
      clientName: ['', Validators.required],
      reportingManager: ['', Validators.required],
      rmEmail: ['', Validators.required],
      rmContact: ['', Validators.required],
      address : this.formBuilder.group({
        street1: ['', Validators.required],
        street2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required]
        }),
    });

    this.vendorDetails = this.formBuilder.group({
      vendorName: ['', Validators.required],
      address: this.formBuilder.group({
        street1: ['', Validators.required],
        street2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required]
      }),
      pocName: ['', Validators.required],
      pocEmail: ['', Validators.required],
      pocContact: ['', Validators.required],
      billingRate: ['', Validators.required],
      startDate: ['', Validators.required],
    });
  }

  form4() {
    console.log(this.personalDetails);
    this.employeeService.postdata(this.personalDetails.value);
  }
}
