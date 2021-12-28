import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TrackSelectDirective } from '../../directives/track-select.directive'

@NgModule({
  declarations: [TrackSelectDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TrackSelectDirective
  ]
})
export class SharedModule { }
