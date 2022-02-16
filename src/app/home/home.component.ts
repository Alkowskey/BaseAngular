import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Data, Weather } from 'src/interfaces'
import { WeatherAPIService } from '../services/weather-api.service'
import { PageVisibilityService } from '../services/page-visibility.service'
import { NotificationService } from '../services/notification.service'
import { ModalService } from '../services/modal.service'
import { MenuElement } from '../menu/menu.component'
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { WeatherApiMockService } from '../Mock/weather-api-mock.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [
    { provide: 'USE_FAKE', useValue: true },
    {
      provide: WeatherAPIService,
      useFactory: (http: HttpClient, fake: boolean) => !fake ? new WeatherAPIService(http) : new WeatherApiMockService(),
      deps: [HttpClient, 'USE_FAKE']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush // On push detecion
})
export class HomeComponent implements OnInit {
  title = 'loginApp Home';
  options: string[] = ['option 1', 'option 2', 'option 3', 'option from home']
  hiddenOptions: string[] = ['option 1']

  subject = new Subject<number>();

  curr: number = 10;
  total: number = 100;

  public displayedColumns: string[] = ['temp2m', 'cloudcover', 'direction', 'speed'];
  public dataSource: Data[] = [];
  public isLoadingResults = true;
  buttonValue = '';
  menuElements: MenuElement[] = [{ icon: 'home', name: 'Home' }, { icon: 'domain', name: 'Main' }, { icon: 'settings', name: 'Settings' }]
  constructor (private weather: WeatherAPIService, private visibility: PageVisibilityService, readonly notificationService: NotificationService, readonly modal$$: ModalService, private changeRef: ChangeDetectorRef) {
  }

  ngOnInit (): void {
    this.loadData()
    setTimeout(() => {
      this.hiddenOptions.push('option 3')
      this.subject.next(1)
      this.curr = 50
    }, 10000)
  }

  loadData (): void {
    console.log(this.weather.groupWind().subscribe(res => console.log(res)))
    this.visibility.isVisible().subscribe((isVisible: Boolean) => console.log(`is visible: ${isVisible}`))
    this.weather.getWeather().subscribe((data: Weather) => {
      if (data?.dataseries == null) { this.dataSource = [] } else {
        this.isLoadingResults = false
        this.dataSource = data?.dataseries
        this.changeRef.detectChanges()
      }
    })
  }

  show () {
    this.notificationService.show('Test toast').subscribe()
  }
}
