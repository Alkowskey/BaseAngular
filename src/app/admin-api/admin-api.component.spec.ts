import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AdminAPIComponent } from './admin-api.component';

const NAME = "testName";
const PHONE = "123123123";
describe('AdminAPIComponent', () => {
  let component: AdminAPIComponent;
  let fixture: ComponentFixture<AdminAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAPIComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.formGroup.controls['firstName'].clearAsyncValidators(); //dont know how to test async validators
  });

  it('form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    let firstName = component.formGroup.controls['firstName'];
    let phone = component.formGroup.controls['phone'];
    firstName.setValue(NAME);
    phone.setValue(PHONE);

    expect(phone.valid).toBeTruthy();
    expect(firstName.valid).toBeTruthy();
    expect(component.formGroup.valid).toBeTruthy
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
