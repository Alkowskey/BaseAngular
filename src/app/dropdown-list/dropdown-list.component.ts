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

  @Input()
  multiSelect: boolean = false;

  onChange: any = () => {}
  onTouch: any = () => {}
  public value: (string[] | string) = ['']
  toggleMulti (val: string) {
    if (!Array.isArray(this.value)) return

    if (!this.value.includes(val)) { this.value.push(val) } else {
      const index: number = this.value.findIndex(v => v === val)
      if (index !== -1) {
        this.value.splice(index, 1)
      }
    }
  }

  toggleSingle (val: string) {
    if (val !== undefined) {
      this.value = val
      console.log(this.value)
    }
  }

  toggleValue (val: string) {
    if (this.multiSelect === true) { this.toggleMulti(val) } else { this.toggleSingle(val) }
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
