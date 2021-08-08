import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  // two routes localhost:4200/employees loads EmployeeListComponent and
  // localhost:4200 redirects to /employees which then loads same component
  {path: 'employees', component: EmployeeListComponent}, //url and component for this route,
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'} //redirect from empty path (localhost:4200) to /employees, for empty paths, recommended to user full pathMatch
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
