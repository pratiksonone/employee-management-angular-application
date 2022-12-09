import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
})
export class EmpDetailsComponent implements OnInit, OnChanges {
  active = 1;
  selectedEmployee: any;
  employeeDeleted: boolean = false;
  isMale: boolean = false;

  @Input('employeeID') employeeID: number = 0;
  @Input('employees') employees: any;

  constructor(private employeeData: EmployeesService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employees'] || (changes['employeeID'] && this.employees)) {
      if (this.employeeID < 0) {
        this.employeeDeleted = true;
      } else {
        this.selectedEmployee = this.employees[this.employeeID];
        if (this.selectedEmployee.gender == 'male') {
          this.isMale = true;
        } else {
          this.isMale = false;
        }
        this.employeeDeleted = false;
      }
    }
  }
}
