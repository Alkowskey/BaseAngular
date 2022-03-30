import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { SaveService } from '../../services/save.service'
import { debounceTime, map, Observable } from 'rxjs'

@Component({
  selector: 'app-trimmer-form',
  templateUrl: './trimmer-form.component.html',
  styleUrls: ['./trimmer-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrimmerFormComponent implements OnInit {
  form = new FormGroup({
    input: new FormControl()
  })

  $save: Observable<string> = this.form.valueChanges.pipe(debounceTime(400), map(form => this.saveService.trim(form.input)))

  constructor (private saveService: SaveService) { }

  ngOnInit (): void {
    this.$save.subscribe(this.saveService.saveToApi)
  }
}
