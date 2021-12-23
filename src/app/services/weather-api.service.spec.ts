import { TestBed } from '@angular/core/testing'
import { Data } from 'src/interfaces'

import { WeatherAPIService } from './weather-api.service'
import { HttpClientModule } from '@angular/common/http'

describe('WeatherAPIService', () => {
  let service: WeatherAPIService
  const testData: Data = {
    timepoint: 1,
    cloudcover: 1,
    seeing: 1,
    transparency: 1,
    lifted_index: 1,
    rh2m: 1,
    wind10m: {
      direction: 'N',
      speed: 12
    },
    temp2m: 1,
    prec_type: '1'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
    service = TestBed.inject(WeatherAPIService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('Should count number of wind directions', () => {
    const data: Data[] = [{
      ...testData,
      wind10m: {
        direction: 'N',
        speed: 12
      }
    },
    {
      ...testData,
      wind10m: {
        direction: 'N',
        speed: 11
      }
    },
    {
      ...testData,
      wind10m: {
        direction: 'S',
        speed: 10
      }
    }]
    expect(service.countByDirection(data, 'N')).toBe(2)
    expect(service.countByDirection(data, 'S')).toBe(1)
  })
})
