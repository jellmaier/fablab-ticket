import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { AppApiService } from '../../services/app-api.service';
import { TicketList } from '../../ticket/my-tickets/my-tickets.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService,
              private ref: ChangeDetectorRef,
              private appApiService: AppApiService) { }

  private isAdmin:boolean = false;
  private isAdminSubscription: Subscription;
  private hash: string = '';
  tickets$: Observable<TicketList>;

  ngOnInit(): void {
    this.loadAdminInfo();
    this.loadTicketsAsync();
  }

  loadTicketsAsync():void {
    this.tickets$ = this.httpService.getMyTicketsV2(this.hash);
  }

  private loadAdminInfo(): void {
    this.isAdminSubscription = this.appApiService.isApiDataLoaded().subscribe(loaded => {
      if (loaded === true) {
        //console.log('Admin: ' + this.appApiService.isAdmin());
        this.isAdmin = this.appApiService.isAdmin();
        if (this.isAdmin === false) {
          this.gotoAngular1();
        }
        //this.isAdminSubscription.unsubscribe();
      }
    });
  }

  private gotoAngular1():void  {
    window.location.href = '../mein-ticket';
  }

  ngOnDestroy(): void {
    this.isAdminSubscription.unsubscribe();
  }

}
