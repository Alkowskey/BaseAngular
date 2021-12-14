import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AdminAPIComponent } from './admin-api.component';

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
