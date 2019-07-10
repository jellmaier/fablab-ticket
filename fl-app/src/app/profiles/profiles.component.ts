import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { LinkService } from '../services/link.service';
import { observable, Observable } from 'rxjs';
import { TicketList } from '../ticket/my-tickets/my-tickets.component';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesComponent implements OnInit {

  tickets$: Observable<TicketList>;

  constructor(private httpService: HttpService,
              private linkService: LinkService) { }

  ngOnInit(): void {
    this.loadResource();
  }

  loadResource():void {

    this.tickets$ = this.httpService.getResourceByLink('profiles/1/tickets');

    this.httpService.getCurrentResource().subscribe(
      data =>  {
        console.log(data);
        console.log(this.linkService.getHrefByReltype(data.links, 'tickets'));
        //this.tickets$ = this.httpService.getResourceByLink(this.linkService.getHrefByReltype(data.links, 'tickets'));
      },
      err =>  {
        console.log(err.error.message);
      }
    );
  }

  loadResource2():void {

  //  this.tickets$ = this.httpService.getResourceByLink('profiles/1/tickets');

    this.tickets$ = this.httpService.getCurrentResource().pipe(
     // switchMap(character =>   this.httpService.getResourceByLink('profiles/1/tickets'))
    );

  }

}
