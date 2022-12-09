import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpDetailsComponent } from './emp-details.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleChange } from '@angular/core';

describe('EmpDetailsComponent', () => {
  let component: EmpDetailsComponent;
  let fixture: ComponentFixture<EmpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbNavModule],
      declarations: [EmpDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnChanges', () => {
    component.employeeID = 1;
    component.employees = [];
    component.ngOnChanges({
      name: new SimpleChange(
        null,
        component.employeeID || (component.employees && component.employees),
        true
      ),
    });
    
    fixture.detectChanges();
    expect(component.selectedEmployee).toBe(
      component.employees[component.employeeID - 1]
    );
  });
});
