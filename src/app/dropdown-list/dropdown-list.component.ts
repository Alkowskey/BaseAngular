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

  @Input()
  title: string = 'Options';

  onChange: any = () => {}
  onTouch: any = () => {}
  value: (string[] | string) = ['']
  toggleMulti (val: string) {
    if (!Array.isArray(this.value)) return
    const index: number = this.value.findIndex(v => v === val)
    if (index !== -1) { this.value.splice(index, 1) } else { this.value.push(val) }
  }

  toggleSingle (val: string) {
    if (val !== undefined) { this.value = val }
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
