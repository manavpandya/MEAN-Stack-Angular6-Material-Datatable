import { Component, OnInit } from '@angular/core';
import { MyDataServiceService } from '../../Services/my-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Employee from '../../../../Model/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
})
export class EditEmployeeComponent implements OnInit {

  empid: string;
  employeeDetail: Employee;
  frmGroup: FormGroup;

  constructor(private service: MyDataServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.empid = params.id;
    });
    this.initializeForm();
  }

  ngOnInit() {
    this.getEmployeeById(this.empid);
  }

  // To Initialize Form
  initializeForm() {
    this.frmGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  // To Single Employee Details By ID
  getEmployeeById(empid) {
    this.service.getEmployeeById(empid).subscribe(res => {
      this.employeeDetail = res;
      this.frmGroup.patchValue({
        firstName: this.employeeDetail.firstName,
        lastName: this.employeeDetail.lastName,
        email: this.employeeDetail.email,
        phone: this.employeeDetail.phone,
      });
    });
  }

  // To Update Employee Detail
  updateEmployee() {
    if (this.frmGroup.valid) {
      let data = this.frmGroup.value;
      this.service.updateEmployee(this.empid, data).subscribe(() => {
        this.router.navigate(['/Crud']);
      });
    }
  }

}
