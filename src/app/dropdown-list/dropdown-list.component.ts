import { ChangeDetectionStrategy, Component, forwardRef, Input, ChangeDetectorRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

type stringTypes = (string[] | string);
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush // On push detecion
})
export class DropdownListComponent implements ControlValueAccessor {
  constructor (private changeDetector : ChangeDetectorRef) {
    setTimeout(() => {
      this.changeDetector.detectChanges()
    }, 6000)
  }

  @Input()
  options: string[] = []

  @Input()
  hiddenOptions: string[] = [];

  _multiple: boolean = true;
  value: stringTypes = [];

  @Input()
  get multiSelect (): boolean {
    return this._multiple
  };

  set multiSelect (multiple: boolean) {
    this._multiple = multiple

    if (this._multiple) {
      this.value = []
    } else {
      this.value = ''
    }
  }

  @Input()
  title: string = 'Options';

  onChange: any = () => {}
  onTouch: any = () => {}

  toggleMulti (val: string) {
    this.value = this.value as []
    const index: number = this.value.findIndex((v: string) => v === val)
    if (index !== -1) { this.value.splice(index, 1) } else { this.value.push(val) }
  }

  toggleSingle (val: string) {
    if (val !== undefined) { this.value = val }
  }

  toggleValue (val: string) {
    if (this.multiSelect) { this.toggleMulti(val) } else { this.toggleSingle(val) }
    this.onChange(this.value)
    this.onTouch(this.value)
  }

  writeValue (value: string[]) {
    if (value) { this.value = value }
  }

  registerOnChange (fn: any) {
    this.onChange = fn
  }

  registerOnTouched (fn: any) {
    this.onTouch = fn
  }
}
