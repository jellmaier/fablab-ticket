import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AppApiService } from '../services/app-api.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit, OnDestroy {

  constructor(private appApiService: AppApiService) { }

  private isAdmin:boolean = false;
  private isAdminSubscription: Subscription;

  ngOnInit(): void {
    this.loadAdminInfo();
 
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
