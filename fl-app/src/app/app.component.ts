import { Component }          from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress [color]="'#028F76'" [spinner]="false"></ng-progress>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}


//<ng-progress [color]="'#028F76'" [showSpinner]="false"></ng-progress>