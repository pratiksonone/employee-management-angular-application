import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call method getBackHome', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.btn'));
    spyOn(component, 'getBackHome').and.callThrough();
    buttonElement.triggerEventHandler('click', null);
    tick();
    fixture.whenStable().then(() => {
      expect(component.getBackHome()).toBe();
    });
  }));
});
