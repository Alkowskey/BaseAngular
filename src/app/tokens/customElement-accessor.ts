import { InjectionToken } from '@angular/core'
import { CustomElementAccessor } from '../../interfaces'

export const CUSTOM_ELEMENT_ACCESSOR =
    new InjectionToken<CustomElementAccessor>('A component that is passed to the directive')
