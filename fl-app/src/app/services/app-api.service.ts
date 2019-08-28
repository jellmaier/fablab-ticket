import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { BasicResource } from './http.service';
import { Link } from './link.service';

export interface AppApiResponse {
  blog_url: string;
  templates_url: string;
  api_url: string;
  sharing_url: string;
  rest_v2_url: string;
  nonce: string;
}

export interface AppApiResponseV2 {
  is_dev_mode: boolean;
  rest_v2_url: string;
}

export interface UserData extends BasicResource{
  is_user_logged_in: boolean;
  is_admin: boolean;
  user_display_name: string;
  nonce: string;
}

export interface TerminalData {
  is_terminal: boolean;
  ticket_terminals_only: boolean;
  auto_logout: number;
  ticket_system_online: boolean;
}

// define require to import data
declare var require: any;

// javascript variables defined in wordpress
declare var AppAPI: any;
declare var AppAPIv2: any;
declare var UserDataLoc: any;
declare var TerminalDataLoc: any;


@Injectable()
export class AppApiService {

  private appDataSubject:BehaviorSubject<boolean>;

  private appApi: AppApiResponse;
  private appApiv2: AppApiResponseV2;
  private userData: UserData;
  private terminalData: TerminalData;

  constructor() {
    this.appDataSubject = new BehaviorSubject<boolean>(false);
    this.loadApiData();
  }

  private loadApiData():void {

    if (typeof AppAPIv2 === 'undefined') {
      this.appApiv2 = require('./AppAPIv2.json');
    } else {
      this.appApiv2 = AppAPIv2;
    }

    // when AppAPI start in dev mode and load app data fom json
    if (this.appApiv2.is_dev_mode) {
      console.log('Runing in Dev-Mode');
      this.appApi = require('./AppAPI.json');
      this.terminalData = require('./TerminalData.json');
      this.userData = require('./UserData.json');

      const userLoggedIn:string = localStorage.getItem('is-user-logged-in');
      if (userLoggedIn === 'true') {
        console.log('Load Data from LocalStorage');
        this.userData.is_user_logged_in = true;
        this.userData.is_admin = (localStorage.getItem('is-admin') === 'true');
        this.userData.nonce = localStorage.getItem('nonce');
        this.userData.user_display_name = localStorage.getItem('user-display-name');
      }
    } else {
      this.appApi = AppAPI;
      this.userData = UserDataLoc;
      this.terminalData = TerminalDataLoc;
    }
    this.appDataSubject.next(true);
  }

  //
  public setDevUserLoggedIn(data:UserData):void {
    this.userData = data;
    localStorage.setItem('nonce', data.nonce);
    localStorage.setItem('is-user-logged-in', String(data.is_user_logged_in));
    localStorage.setItem('is-admin', String(data.is_admin));
    localStorage.setItem('user-display-name', String(data.user_display_name));
  }

  public setDevUserLoggedOut():void {
    localStorage.removeItem('nonce');
    localStorage.removeItem('is-user-logged-in');
    localStorage.removeItem('is-admin');
    localStorage.removeItem('user-display-name');
  }


  // check if data loaded

  public isApiDataLoaded():BehaviorSubject<boolean> {
    return this.appDataSubject;
  }

  // getter Methods

  public getBlogUrl():string {
    return this.appApi.blog_url;
  }

  public getPluginApiUrl():string {
    return this.appApi.sharing_url;
  }

  public getRestBaseUrl():string {
    return this.appApi.rest_v2_url;
  }

  public getNonce():string {
    return this.userData.nonce;
  }

  public isDevMode():boolean {
    return this.appApiv2.is_dev_mode;
  }

  // -------   Terminal methods ----------

  public isTerminal():boolean {
    return this.terminalData.is_terminal;
  }

  public isTicketSystemOnline():boolean {
    return this.terminalData.ticket_system_online;
  }

  // -------   User methods ----------

  public isUserLoggedIn():boolean {
    return this.userData.is_user_logged_in;
  }

  public isAdmin():boolean {
    return this.userData.is_admin;
  }

}

