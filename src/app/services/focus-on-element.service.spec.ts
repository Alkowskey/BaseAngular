import { TestBed } from '@angular/core/testing'

import { FocusOnElementService } from './focus-on-element.service'

describe('FocusOnElementService', () => {
  let service: FocusOnElementService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FocusOnElementService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
