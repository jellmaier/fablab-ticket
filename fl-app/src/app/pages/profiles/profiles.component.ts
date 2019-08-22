import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicResource, HttpService } from '../../services/http.service';
import { Link, LinkService } from '../../services/link.service';
import { TicketList } from './my-tickets/my-tickets.component';
import { DeviceList } from './devices/devices.component';

interface ProfileData {
  tickets$: Observable<TicketList>;
  devices$: Observable<DeviceList>;
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesComponent implements OnInit {

  profileData$: Observable<ProfileData>;
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
    this.httpService.getCurrentResource<BasicResource>().subscribe(
      data =>  {
        this.router.navigate(['/' + this.linkService.getHrefByReltype(data.links, 'related')]);
      },
      err =>  {
        console.log(err.error.message);
      }
    );
  }
/*
  loadProfileResource():void {
    this.profileData$ = this.httpService.getCurrentResource().pipe(
      switchMap((response: any) => {
        return forkJoin(
          this.httpService.getResourceByHref(this.linkService.getHrefByReltype(response.links, 'tickets')),
          this.httpService.getResourceByHref(this.linkService.getHrefByReltype(response.links, 'devices'))
        );
      }),
      map((value: [TicketList, any]) => {
        return { tickets: value[0], devices: value[1] } as ProfileDataaa;
      })
    );
    */

  loadProfileResource():void {
     this.profileData$ = this.httpService.getCurrentResource<BasicResource>().pipe(
      mergeMap((response: any) => {
        return of({
          tickets$: this.httpService.getResourceByHref<TicketList>(this.linkService.getHrefByReltype(response.links, 'tickets')),
          devices$: this.httpService.getResourceByHref<DeviceList>(this.linkService.getHrefByReltype(response.links, 'devices'))
        } as ProfileData);
      })
    );
  }

  buttonClicked(link: Link): void {
    this.httpService.requestByLink<any>(link).subscribe(a => {
      console.log(a);
    });
   // this.openDialogEvent$.emit(true);
  }
}
