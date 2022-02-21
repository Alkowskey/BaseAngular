import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { switchMap, debounceTime, Observable, distinctUntilChanged } from 'rxjs'
import { AutosaveServiceService } from './autosave-service.service'
import { IAutoSave } from '../../../interfaces'

@Component({
  selector: 'app-autosave-form',
  templateUrl: './autosave-form.component.html',
  styleUrls: ['./autosave-form.component.sass']
})
export class AutosaveFormComponent implements OnInit {
  formGroup = new FormGroup({
    darkMode: new FormControl(),
    toggle: new FormControl()
  })

  save$: Observable<string> = new Observable<string>();

  constructor (private autosaveService: AutosaveServiceService) { }

  ngOnInit (): void {
    this.save$ = this.formGroup.valueChanges.pipe(
      debounceTime(1000),
      switchMap((v: IAutoSave) => this.autosaveService.save(v))
    )
  }
}
