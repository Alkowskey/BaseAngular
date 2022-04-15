import { Component, OnInit, forwardRef } from '@angular/core'
import { Validators } from '@angular/forms'
import { SaveService } from '../../services/save.service'
import { debounceTime, map, Observable } from 'rxjs'
import { CustomFormControl } from '../../_utils/CustomFormControl'
import { CustomFormGroup } from '../../_utils/CustomFormGroup'
import { CUSTOM_ELEMENT_ACCESSOR } from '../../tokens/customElement-accessor'
import { CustomElementAccessor } from '../../../interfaces'

@Component({
  selector: 'app-trimmer-form',
  templateUrl: './trimmer-form.component.html',
  styleUrls: ['./trimmer-form.component.sass'],
  providers: [
    {
      provide: CUSTOM_ELEMENT_ACCESSOR,
      useExisting: forwardRef(() => TrimmerFormComponent)
    }
  ]
})
export class TrimmerFormComponent implements OnInit, CustomElementAccessor {
  form = new CustomFormGroup({
    input: new CustomFormControl('', [Validators.required, Validators.minLength(3)], { disabledByUser: false }),
    test: new CustomFormControl('', [Validators.required, Validators.minLength(3)])
  })

  $save: Observable<string> = this.form.valueChanges.pipe(debounceTime(400), map(form => this.saveService.trim(form.input)))

  constructor (private saveService: SaveService) { }
  customMethod (): void {
    console.log('TESTOWA')
  }

  ngOnInit (): void {
    this.$save.subscribe(this.saveService.saveToApi)
    this.form.setCallbackForAll((debounceTime(1000), map(v => v + 'test')), console.log)
  }
}
