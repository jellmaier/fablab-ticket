import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicResource, HttpService } from '../../services/http.service';
import { Link, LinkService } from '../../services/link.service';
import { TicketList } from './my-tickets/my-tickets.component';
import { DeviceList } from './devices/devices.component';
import { DialogData } from '../../components/dialog/dialog.component';

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
  ticketOverlayData$: Observable<DialogData>;
  openDialogEvent$: EventEmitter<boolean> = new EventEmitter();
  showDialog: boolean = false;

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
        this.router.navigate(['/' + this.linkService.getHrefByReltype(data._links, 'related')]);
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
    //refactor to store, avoid duplicate calls
     this.profileData$ = this.httpService.getCurrentResource<BasicResource>().pipe(
      mergeMap((response: BasicResource) => {
        return of({
          tickets$: this.httpService.getResourceByHref<TicketList>(this.linkService.getHrefByReltype(response._links, 'tickets')),
          devices$: this.httpService.getResourceByHref<DeviceList>(this.linkService.getHrefByReltype(response._links, 'devices'))
        } as ProfileData);
      })
    );
  }

  buttonClicked(showDialog: boolean, link: Link): void {
    this.ticketOverlayData$ = this.httpService.requestByLink<DialogData>(link);
    this.showDialog = showDialog;
    if (!showDialog) {
      this.loadProfileResource();
    }
  }

  closeDialog(closeDialog: boolean): void {
    if (closeDialog) {
      this.showDialog = false;
    }
  }
}
