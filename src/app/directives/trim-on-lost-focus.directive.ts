import { Directive, ElementRef, HostListener, Inject, Optional } from '@angular/core'
import { CustomElementAccessor } from 'src/interfaces'
import { SaveService } from '../services/save.service'
import { CUSTOM_ELEMENT_ACCESSOR } from '../tokens/customElement-accessor'

@Directive({
  selector: '[appTrimOnLostFocus]'
})
export class TrimOnLostFocusDirective {
  constructor (
    @Optional()
    @Inject(CUSTOM_ELEMENT_ACCESSOR)
    private readonly customElement: CustomElementAccessor | null,
    private el: ElementRef,
    private saveService: SaveService
  ) { }

  @HostListener('focusout') onFocusOut () {
    this.customElement?.customMethod()
    const element = this.el.nativeElement
    element.value = this.saveService.trim(element.value)
  }
}
