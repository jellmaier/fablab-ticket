import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicResource, HttpService } from '../../services/http.service';
import { Link, LinkService } from '../../services/link.service';
import { TicketList } from './my-tickets/my-tickets.component';
import { DeviceList } from './devices/devices.component';
import { DialogData } from '../../components/dialog/dialog.component';
import { Store } from '@ngrx/store';
import { DEVICE_STORE_PATH, PROFILE_STORE_PATH, ProfileState, TICKET_STORE_PATH } from './store/profile.state';
import * as ProfileActions from './store/actions/profile.actions';


export interface Profile extends BasicResource {
  title: string;
  message: string;
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesComponent implements OnInit {

  ticketOverlayData$: Observable<DialogData>;
  showDialog: boolean = false;

  tickets$: Observable<TicketList>;
  devices$: Observable<DeviceList>;
  profile$: Observable<Profile>;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private linkService: LinkService,
              private store: Store<ProfileState>) {
    this.tickets$ = store.select(TICKET_STORE_PATH);
    this.devices$ = store.select(DEVICE_STORE_PATH);
    this.profile$ = store.select(PROFILE_STORE_PATH);
  }

  ngOnInit(): void {
    if (this.route.snapshot.data['redirect'] === true) {
      this.store.dispatch(new ProfileActions.ProfileLoadRedirect(null));
    } else {
      this.store.dispatch(new ProfileActions.ProfileInit(null));
    }
  }

  buttonClickedAndShowDialog(link: Link): void {
    this.ticketOverlayData$ = this.httpService.requestByLink<DialogData>(link);
    this.showDialog = true;
  }

  buttonClickedAndHideDialog(link: Link): void {
    this.httpService.requestByLink<DialogData>(link).subscribe();
    this.showDialog = false;
    this.store.dispatch(new ProfileActions.ProfileInit(null));
  }

  closeDialog(closeDialog: boolean): void {
    if (closeDialog) {
      this.showDialog = false;
    }
  }
}
