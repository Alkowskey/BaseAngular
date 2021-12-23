import { TestBed } from '@angular/core/testing'
import { Data } from 'src/interfaces'

import { WeatherAPIService } from './weather-api.service'
import { HttpClientModule } from '@angular/common/http'

describe('WeatherAPIService', () => {
  let service: WeatherAPIService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
    service = TestBed.inject(WeatherAPIService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('Should count number of wind directions', () => {
    const data: Pick<Data, 'wind10m'>[] = [{
      wind10m: {
        direction: 'N',
        speed: 12
      }
    },
    {
      wind10m: {
        direction: 'N',
        speed: 11
      }
    },
    {
      wind10m: {
        direction: 'S',
        speed: 10
      }
    }]
    expect(service.countByDirection(data, 'N')).toBe(2)
    expect(service.countByDirection(data, 'S')).toBe(1)
  })
})
