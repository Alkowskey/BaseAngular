import { Directive, HostListener, Input } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'

@Directive({
  selector: '[appChangeLang]'
})
export class ChangeLangDirective {
  @Input('isChecked') isChecked: boolean = false;
  langs: string[]
  constructor (private translocoService: TranslocoService) {
    this.langs = translocoService.getAvailableLangs() as string[]
  }

  @HostListener('click', ['$event.target']) onClick () {
    this.translocoService.setActiveLang(this.langs[this.isChecked ? 0 : 1])
  }
}
