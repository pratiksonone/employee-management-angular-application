import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  totalLength: any;
  pageSize = 7;
  page = 1;
  employeeId: number = 0;
  selectedEmpIndex: number = 0;
  errorMessage = '';
  errorStatus = '';
  showImages: boolean = true;
  searchText: any;

  constructor(private employeesData: EmployeesService) {
    employeesData.getEmployeesData().subscribe({
      next: (data) => {
        this.employees = data;
        this.totalLength = data.length;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.errorStatus = err.status;
      },
    });
  }

  ngOnInit(): void {}

  showDetails(id: any, i: number) {
    this.employeeId = this.employees.findIndex(
      (employee) => employee.id == `${id}`
    );
    this.selectedEmpIndex = i;
  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result: any) => {
      if (result.value) {
        this.employeesData.deleteEmployee(id).subscribe(() => {
          const index = this.employees.findIndex(
            (employee) => employee.id == `${id}`
          );
          this.employees.splice(index, 1);
          this.totalLength = this.employees.length;
          this.employeeId = -10;
          setTimeout(() => {
            this.employeeId = 0;
            this.selectedEmpIndex = 0;
          }, 2500);
        });
        Swal.fire('Deleted!', 'Employee has been deleted!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Employee data is Safe!', 'error');
      }
    });
  }

  showImage() {
    this.showImages = !this.showImages;
  }
}
