import { Component, OnInit } from '@angular/core'
import { Data, Weather } from 'src/interfaces'
import { WeatherAPIService } from '../services/weather-api.service'
import { PageVisibilityService } from '../services/page-visibility.service'
import { NotificationService } from '../services/notification.service'
import { ModalService } from '../services/modal.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'loginApp Home';
  options: string[] = ['option 1', 'option 2', 'option 3', 'option from home']
  hiddenOptions: string[] = ['option 1']
  public displayedColumns: string[] = ['temp2m', 'cloudcover', 'direction', 'speed'];
  public dataSource: Data[] = [];
  public isLoadingResults = true;
  buttonValue = '';
  constructor (private weather: WeatherAPIService, private visibility: PageVisibilityService, readonly notificationService: NotificationService, readonly modal$$: ModalService) {
  }

  ngOnInit (): void {
    this.loadData()
    setTimeout(() => { this.hiddenOptions.push('option 3') }, 1000)
  }

  loadData (): void {
    console.log(this.weather.groupWind().subscribe(res => console.log(res)))
    this.visibility.isVisible().subscribe((isVisible: Boolean) => console.log(`is visible: ${isVisible}`))
    this.weather.getWeather().subscribe((data: Weather) => {
      if (data?.dataseries == null) { this.dataSource = [] } else {
        this.isLoadingResults = false
        this.dataSource = data?.dataseries
      }
    })
  }

  show () {
    this.notificationService.show('Test toast').subscribe()
  }
}
