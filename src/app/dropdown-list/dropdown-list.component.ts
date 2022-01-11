import { Component, forwardRef, Input } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownListComponent),
      multi: true
    }
  ]
})
export class DropdownListComponent implements ControlValueAccessor {
  constructor () { }
  @Input()
  options: string[] = ['option 1', 'option 2', 'option 3']

  onChange: any = () => {}
  onTouch: any = () => {}
  public value = ['']

  toggleValue (val: string) {
    if (!this.value.includes(val)) { this.value.push(val) } else {
      const index: number = this.value.findIndex(v => v === val)
      if (index !== -1) {
        this.value.splice(index, 1)
      }
    }
    this.onChange(this.value)
    this.onTouch(this.value)
  }

  writeValue (value: string[]) {
    this.value = value
  }

  registerOnChange (fn: any) {
    this.onChange = fn
  }

  registerOnTouched (fn: any) {
    this.onTouch = fn
  }
}
