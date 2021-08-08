import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("calling getEmployees");
    this.getEmployees();
  }

  private getEmployees() {
    /* subscibe to employee service getEmployeeList method */
    this.employeeService.getEmployeeList().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    // navigate to route 'update-employee' and pass it id as per app-routing.module setup
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      // navigate to employee list
      console.log(data);
      this.getEmployees();
    });
  }

  employeeDetails(id: number) {
    // navigate to route 'employee-details' and pass it id as per app-routing.module setup
    this.router.navigate(['employee-details', id]);
  }
}
