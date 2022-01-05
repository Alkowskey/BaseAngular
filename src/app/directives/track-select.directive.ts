import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core'
import { FocusOnElementService } from '../services/focus-on-element.service'

@Directive({
  selector: '[appTrackSelect]'
})

export class TrackSelectDirective implements AfterViewInit {
  selectedElement: Element | null = null;
  insertElement: Element | null = null;
  @Input('displayId') displayId: string = '#insert';
  @Input('onEmpty') onEmpty: string = 'nothing is selected' ;
  constructor (private el: ElementRef, private focusWithin: FocusOnElementService) {

  }

  ngAfterViewInit (): void {
    this.insertElement = this.el.nativeElement.querySelector(this.displayId)
    this.focusWithin.trackSelect(this.el.nativeElement).subscribe((result: Element | null) => {
      this.selectedElement = result || null
      if (this.insertElement) { this.insertElement.innerHTML = result?.id ? result?.id : this.onEmpty }
    })
  }

  // Simpler, but i wanted to try both to see if it works as expected
  @HostListener('focusin', ['$event.target']) onFocus (el: Element) {
    el.classList.add('selected')
  }

  @HostListener('focusout', ['$event.target']) onLostFocus (el: Element) {
    console.log(el)
    el.classList.remove('selected')
  }
}
