import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherAPIService } from '../services/weather-api.service';

import { HomeComponent } from './home.component';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let table: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, WeatherAPIService],
      declarations: [HomeComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have table headers', () => {
    table = fixture.nativeElement.querySelector("mat-table");
    expect(table).toBeDefined();
  })
});
