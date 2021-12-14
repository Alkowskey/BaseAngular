import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('WeatherAPIService', () => {
  let service: WeatherAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpHandler, HttpClient] });
    service = TestBed.inject(WeatherAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
