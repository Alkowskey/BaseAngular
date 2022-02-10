import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit {
  @Input() curr: number = 0;
  @Input() total: number = 100;
  progress: number = 0;
  constructor () {
  }

  ngOnInit (): void {
    this.progress = this.curr / this.total * 100
  }
}
