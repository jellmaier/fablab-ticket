import { Component }          from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress [color]="'#028F76'" [spinner]="false"></ng-progress>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/statistic" routerLinkActive="active">Statistic</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


//<ng-progress [color]="'#028F76'" [showSpinner]="false"></ng-progress>