import { Component }          from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
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
