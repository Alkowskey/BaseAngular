import { Component, Input, OnInit } from '@angular/core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

/*
  Provides schema for input elements
  icon - icon name from materialUI list: https://fonts.google.com/icons
  name - string that will be displayed next to icon
*/
export interface MenuElement {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input()
  elements: MenuElement[] = [];

  faFacebook = faFacebook;
  constructor () { }

  ngOnInit (): void {
  }
}
