import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eurasia';

  constructor(private _router: Router) {
    _router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
  }
}
