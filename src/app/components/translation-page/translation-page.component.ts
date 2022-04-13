import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { UsersTabComponent } from '../users-tab/users-tab.component'

@Component({
  selector: 'app-translation-page',
  templateUrl: './translation-page.component.html',
  styleUrls: ['./translation-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslationPageComponent implements OnInit {
  isChecked: boolean = false

  constructor (public dialog: MatDialog) {
  }

  openDialog () {
    const dialogRef = this.dialog.open(UsersTabComponent, {
      width: '250px'
      // data: { name: this.name, animal: this.animal }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      // this.animal = result
    })
  }

  ngOnInit (): void {
    this.openDialog()
  }
}
