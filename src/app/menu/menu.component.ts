import { Component, Input, OnInit } from '@angular/core'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

interface Element {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube
  @Input()
  elements: Element[] = [{ icon: 'home', name: 'Home' }, { icon: 'domain', name: 'Main' }]

  constructor () { }

  ngOnInit (): void {
  }
}
