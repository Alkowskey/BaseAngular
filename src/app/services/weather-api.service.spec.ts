import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { Weather } from 'src/interfaces';
describe('WeatherAPIService', () => {
  let service: WeatherAPIService;
  let mockWeatherService: jasmine.SpyObj<WeatherAPIService>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [WeatherAPIService] });
    service = TestBed.inject(WeatherAPIService); // Just testing if api is injected properly
    let data: Weather = { product: "test_product", init: "test_init", dataseries: [{ wind10m: { direction: "N", speed: 1 }, transparency: 1, cloudcover: 2, lifted_index: 2, prec_type: "prec_type", rh2m: 21, seeing: 1, temp2m: 22, timepoint: 2 }] }
    mockWeatherService = jasmine.createSpyObj(['getWeather']);
    mockWeatherService.getWeather.and.returnValue(of(data));
  });

  it('should receive data', () => {
    const data = mockWeatherService.getWeather();
    expect(service).toBeTruthy();
    expect(data).toBeDefined();
  });
});
