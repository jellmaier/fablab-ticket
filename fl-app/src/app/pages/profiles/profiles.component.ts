import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Link, LinkService } from '../../services/link.service';
import { TicketList } from '../../ticket/my-tickets/my-tickets.component';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesComponent implements OnInit {

  tickets$: Observable<TicketList>;
  ticketOverlayData$: Observable<any>;
  openDialogEvent$: EventEmitter<boolean> = new EventEmitter();

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
        return this.httpService.getResourceByHref(this.linkService.getHrefByReltype(response.links, 'tickets'));
      })
    );

  }

  buttonClicked(link: Link): void {
    console.log(link);
    //this.ticketOverlayData$ = this.httpService.requestByLink(link);
    this.openDialogEvent$.emit(true);
  }

}
