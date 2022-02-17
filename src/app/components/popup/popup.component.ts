import { Component, OnInit } from '@angular/core'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  constructor (readonly modal$$: ModalService) { }

  ngOnInit (): void {
  }
}
