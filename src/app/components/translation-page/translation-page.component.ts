import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrls: ['./translation-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationPageComponent implements OnInit {
  isChecked: boolean = false;
  constructor () {
  }

  ngOnInit (): void {
  }
}
