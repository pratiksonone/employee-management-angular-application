import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
// import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  // let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      // providers: [{ provide: Router, useValue: routerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should navigate to login', () => {
  //   expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  // });
  it('should call method logout', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.btn'));
    spyOn(component, 'logout').and.callThrough();
    buttonElement.triggerEventHandler('click', null);
    tick();
    fixture.whenStable().then(() => {
      expect(component.logout()).toBe();
      // expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
    });
  }));
});
