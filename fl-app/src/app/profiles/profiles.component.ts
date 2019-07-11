import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { LinkService } from '../services/link.service';
import { Observable } from 'rxjs';
import { TicketList } from '../ticket/my-tickets/my-tickets.component';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesComponent implements OnInit {

  tickets$: Observable<TicketList>;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private linkService: LinkService) { }

  ngOnInit(): void {
    if (this.route.snapshot.data['redirect'] === true) {
      this.loadRedirectResource();
    } else {
      this.loadProfileResource();
    }
  }

  loadRedirectResource():void {
    this.httpService.getCurrentResource().subscribe(
      data =>  {
        this.router.navigate(['/' + this.linkService.getHrefByReltype(data.links, 'related')]);
      },
      err =>  {
        console.log(err.error.message);
      }
    );
  }

  loadProfileResource():void {
    this.tickets$ = this.httpService.getCurrentResource().pipe(
      switchMap((response: any) => {
        return this.httpService.getResourceByLink(this.linkService.getHrefByReltype(response.links, 'tickets'));
      })
    );

  }

}
