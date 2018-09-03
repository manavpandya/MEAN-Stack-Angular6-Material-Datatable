import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MyDataServiceService } from '../../Services/my-data-service.service';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
})
export class ListEmployeeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Important objects
  MyDataSource: any;
  employeeList: Employee[];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'action'];

  constructor(private service: MyDataServiceService, private router: Router) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  // To Get List Of Employee
  getEmployees() {
    this.service
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data;
        this.MyDataSource.paginator = this.paginator;
        this.MyDataSource.sort = this.sort;
      });
  }

  // To Edit Employee
  editEmployee(empid) {
    this.router.navigate([`/Crud/edit/${empid}`]);
  }

  // Search specific result
  filterEmployee(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
  }

  // Delete Employee
  deleteEmployee(empid) {
    this.service.deleteEmployee(empid).subscribe(() => {
      this.getEmployees();
    });
  }
}
