import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimmerFormComponent } from './trimmer-form.component';

describe('TrimmerFormComponent', () => {
  let component: TrimmerFormComponent;
  let fixture: ComponentFixture<TrimmerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimmerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimmerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
