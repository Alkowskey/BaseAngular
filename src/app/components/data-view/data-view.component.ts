import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.sass']
})
export class DataViewComponent implements OnInit {
  // material ui icon
  @Input() icon = ''
  // caption that will be displayed next to icon
  @Input() caption = ''
  constructor () { }

  ngOnInit (): void {
  }
}
