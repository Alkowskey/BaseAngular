import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'
import { SaveService } from '../../services/save.service'
import { debounceTime, map, Observable } from 'rxjs'
import { CustomFormControl } from '../../_utils/CustomFormControl'
import { CustomFormGroup } from '../../_utils/CustomFormGroup'

@Component({
  selector: 'app-trimmer-form',
  templateUrl: './trimmer-form.component.html',
  styleUrls: ['./trimmer-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrimmerFormComponent implements OnInit {
  form = new CustomFormGroup({
    input: new CustomFormControl('', [Validators.required, Validators.minLength(3)]),
    test: new CustomFormControl('', [Validators.required, Validators.minLength(3)])
  })

  $save: Observable<string> = this.form.valueChanges.pipe(debounceTime(400), map(form => this.saveService.trim(form.input)))

  constructor (private saveService: SaveService) { }

  ngOnInit (): void {
    this.$save.subscribe(this.saveService.saveToApi)
    this.form.setCallbackForAll((debounceTime(1000), map(v => v + 'test')), console.log)
  }
}
