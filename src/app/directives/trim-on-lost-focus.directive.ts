import { Directive, ElementRef, HostListener } from '@angular/core'
import { SaveService } from '../services/save.service'

@Directive({
  selector: '[appTrimOnLostFocus]'
})
export class TrimOnLostFocusDirective {
  constructor (private el: ElementRef, private saveService: SaveService) { }

  @HostListener('focusout') onFocusOut () {
    const element = this.el.nativeElement
    element.value = this.saveService.trim(element.value)
  }
}
