import { Component, OnInit } from '@angular/core';

import { Subscription }     from 'rxjs';

import { AppApiService } from './../services/app-api.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private appApiService: AppApiService) { }

  private is_admin:boolean = false;
  private is_admin_subscription: Subscription;

  ngOnInit() {
    this.loadAdminInfo();
    
  }

  private loadAdminInfo():void {
    this.is_admin_subscription = this.appApiService.isApiDataLoaded().subscribe(loaded => {
      if (loaded == true) {
        //console.log('Admin: ' + this.appApiService.isAdmin());
        this.is_admin = this.appApiService.isAdmin();
        if (this.is_admin == false) {
          this.gotoAngular1();
        }
        //this.is_admin_subscription.unsubscribe();
      }
    })
  }

  private gotoAngular1() {
    window.location.href = '../mein-ticket';
  }

  ngOnDestroy() {
    this.is_admin_subscription.unsubscribe();
  }

}
