import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { debounceTime, Observable, map, shareReplay, tap, Subject } from 'rxjs'
import { AutosaveServiceService } from './autosave-service.service'

enum SaveStatus {
  Saving = 'Saving...',
  Saved = 'Saved.',
  Idle = '',
}

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

  status$: Subject<SaveStatus> = new Subject<SaveStatus>();

  save$: Observable<string> = this.formGroup.valueChanges.pipe(
    tap(() => {
      this.status$.next(SaveStatus.Saving)
    }),
    debounceTime(1000),
    map((value) => (this.autosaveService.save(value))),
    tap(() => {
      this.status$.next(SaveStatus.Saved)
    }),
    shareReplay(1)
  )

  constructor (private autosaveService: AutosaveServiceService) { }

  ngOnInit (): void {
  }
}
