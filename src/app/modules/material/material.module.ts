import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSortModule } from '@angular/material/sort'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
