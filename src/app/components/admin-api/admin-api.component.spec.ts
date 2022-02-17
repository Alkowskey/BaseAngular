import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminAPIComponent } from './admin-api.component'

import { RouterTestingModule } from '@angular/router/testing'

describe('AdminAPIComponent', () => {
  let component: AdminAPIComponent
  let fixture: ComponentFixture<AdminAPIComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AdminAPIComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAPIComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
