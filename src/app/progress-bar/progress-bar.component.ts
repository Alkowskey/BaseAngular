import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProgressService } from '../services/progress.service'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush // let async pipe do the job
})
export class ProgressBarComponent implements OnInit {
  progre$$: Observable<number>;
  constructor (private progressService: ProgressService) {
    this.progre$$ = this.progressService.progress()
  }

  ngOnInit (): void {
  }
}
