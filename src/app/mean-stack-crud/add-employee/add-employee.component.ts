import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyDataServiceService } from '../../Services/my-data-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: MyDataServiceService, private router: Router) { }

  ngOnInit() {
    this.initializeForm();
  }

  // To initialize Form
  initializeForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  // Add Employee When Submit Button Is Clicked
  addEmployee() {
    if (this.formGroup.valid) {
      let data = this.formGroup.value;
      this.service.addEmployee(data).subscribe(() => {
        this.router.navigate(['/Crud']);
      });
    }
  }

}
