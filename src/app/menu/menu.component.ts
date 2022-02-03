import { Component, OnInit } from '@angular/core'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube
  constructor () { }

  ngOnInit (): void {
  }
}
