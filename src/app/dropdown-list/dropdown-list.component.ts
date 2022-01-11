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
  val = ''
  set value (val: string) {
    if (val !== undefined && this.val !== val) {
      this.val = val
      console.log(val)
      this.onChange(val)
      this.onTouch(val)
    }
  }

  get value (): string {
    return this.val
  }

  // this method sets the value programmatically
  writeValue (value: any) {
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange (fn: any) {
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched (fn: any) {
    this.onTouch = fn
  }
}
