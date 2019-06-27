import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface AppApiResponse {
  blog_url: string;
  templates_url: string;
  api_url: string;
  sharing_url: string;
  nonce: string;
}

export interface UserData {
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

interface User {
  username: string;
  password: string;
}

// define require to import data
declare var require: any;

// javascript variables defined in wordpress
declare var AppAPI: any;
declare var UserDataLoc: any;
declare var TerminalDataLoc: any;


@Injectable()
export class AppApiService {

  private apiDataLoaded: boolean = false;
  private appDataSubject:BehaviorSubject<boolean>;

  private testToggle:boolean = false;
  private toggleSubject:BehaviorSubject<boolean>;


  private appApi: AppApiResponse;
  private userData: UserData;
  private terminalData: TerminalData;
  //private app_connect: AppConnect;
  private user: User;
  private isDevModeEnabled:boolean;

  constructor( private cookieService: CookieService ) {
    this.appDataSubject = new BehaviorSubject<boolean>(false);
    this.loadApiData();
  }

  private loadApiData():void {

    this.isDevModeEnabled = (typeof AppAPI === 'undefined');

    // when AppAPI start in dev mode and load app data fom json
    if (this.isDevModeEnabled) {
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

   public getTemplatesUrl():string {
    return this.appApi.templates_url;
  }
  
  public getApiUrl():string {
    return this.appApi.api_url;
  }

  public getPluginApiUrl():string {
    return this.appApi.sharing_url;
  }

  public getNonce():string {
    return this.userData.nonce;
  }

  public isDevMode():boolean {
    return this.isDevModeEnabled;
  }

  public getAutentificationToken():string {
    return btoa(this.user.username + ':' + this.user.password);
  }

  // -------   Terminal methods ----------

  public isTerminal():boolean {
    return this.terminalData.is_terminal;
  }

  public isTicketSystemOnline():boolean {
    return this.terminalData.ticket_system_online;
  }
/*
  public toggleTerminal():void {
    this.test_toggle = !this.test_toggle;
    this.toggleSubject.next(this.test_toggle);
  }

  public getTerminalObservable():BehaviorSubject<boolean> {
    return this.toggleSubject;
  }
*/
  // -------   User methods ----------

  public isUserLoggedIn():boolean {
    return this.userData.is_user_logged_in;
  }

  public isAdmin():boolean {
    return this.userData.is_admin;
  }

}

