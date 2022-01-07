import { Component, OnInit } from '@angular/core'
import { map, scan, share, startWith, Subject } from 'rxjs'

const registerSeats = (selected: Set<number>, seat: number) => {
  if (selected.has(seat)) {
    selected.delete(seat)
  } else {
    selected.add(seat)
  }

  return selected
}

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.sass']
})
export class SelectSeatsComponent implements OnInit {
  empty = 'Nothing to display';
  selectedSeat$ = new Subject<number>();
  selectedMessage$ = this.selectedSeat$.pipe(
    scan(registerSeats, new Set<number>()),
    startWith(new Set<number>()),
    map(set => (set.size ? Array.from(set).join(', ') : this.empty)),
    share()

  )

  constructor () { }

  ngOnInit (): void {
  }
}
