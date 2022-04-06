import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.sass']
})
export class CustomModalComponent implements OnInit {
  @Output() public close = new EventEmitter<string>()
  constructor () { }

  ngOnInit (): void {
  }

  public closeModal ($event: any) {
    this.close.emit('close')
  }
}
