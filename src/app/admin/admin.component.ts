import { Component, OnInit } from '@angular/core';
import { Auth } from '../_utils';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  title = 'loginApp Admin';
  constructor() { }

  ngOnInit(): void {

  }

}
