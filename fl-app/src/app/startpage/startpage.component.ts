import { Component, OnInit } from '@angular/core';

import { Subscription }     from 'rxjs/Subscription';

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
    //window.location.href = '../rest-test';
    this.loadAdminInfo();
    
  }

  private loadAdminInfo():void {
    this.is_admin_subscription = this.appApiService.isApiDataLoaded().subscribe(loaded => {
      if (loaded == true) {
        //console.log('Admin: ' + this.appApiService.isAdmin());
        this.is_admin = this.appApiService.isAdmin();
        //this.is_admin_subscription.unsubscribe();
      }
    })
  }

  ngOnDestroy() {
    this.is_admin_subscription.unsubscribe();
  }

}
