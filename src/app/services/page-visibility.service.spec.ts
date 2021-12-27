import { TestBed } from '@angular/core/testing'

import { PageVisibilityService } from './page-visibility.service'

describe('PageVisibilityService', () => {
  let service: PageVisibilityService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PageVisibilityService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('Should return either true/false', done => {
    service.isVisible().subscribe(result => {
      expect(result).not.toBeNull()
      done()
    })
  })
})
