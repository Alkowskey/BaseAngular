import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
describe('WeatherAPIService', () => {
  let service: WeatherAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [WeatherAPIService] });
    service = TestBed.inject(WeatherAPIService);
  });

  it('should receive data', () => {
    const data = service.getWeather();
    expect(service).toBeTruthy();
    expect(data).toBeDefined();
  });
});
