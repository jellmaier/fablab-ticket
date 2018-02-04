import { Injectable } from '@angular/core';

import { BehaviorSubject }     from 'rxjs/BehaviorSubject';

import * as AppApiDataDev from "./AppAPI.json";
import * as UserDataDev from "./UserData.json";
import * as TerminalDataDev from "./TerminalData.json";
import * as UserDev from "./user.json";

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

declare var AppAPI: any;
declare var UserDataLoc: any;
declare var TerminalDataLoc: any;


@Injectable()
export class AppApiService {

  private apiDataLoaded: boolean = false;
  private app_data_subject: BehaviorSubject<boolean>;

  private test_toggle: boolean = false;
  private toggle_subject: BehaviorSubject<boolean>;


  private app_api: AppApiResponse;
  private user_data: UserData;
  private terminal_data: TerminalData;
  //private app_connect: AppConnect;
  private user: User;
  private is_dev_mode: boolean;

  constructor() {
    //this.toggle_subject = new BehaviorSubject<boolean>(this.test_toggle);
    this.app_data_subject = new BehaviorSubject<boolean>(false);


    this.loadApiData();
  }

  private loadApiData() {


    this.is_dev_mode = (typeof AppAPI === 'undefined');
    if (this.is_dev_mode) { // Check if it is embadded into the wordpress page
      console.log('Runing in Dev-Mode');
      this.app_api = (<AppApiResponse>(<any>AppApiDataDev));
      this.user_data = (<UserData>(<any>UserDataDev));
      this.terminal_data = (<TerminalData>(<any>TerminalDataDev));
      if (this.user_data.is_admin) // switch between admin and user
        this.user = (<User>(<any>UserDev).admin); 
      else
        this.user = (<User>(<any>UserDev).user);
    } else {
      this.app_api = AppAPI;
      this.user_data = UserDataLoc;
      this.terminal_data = TerminalDataLoc;
    }
    this.app_data_subject.next(true);
    //console.log(this.app_api);
    //console.log(this.user_data);
    //console.log(this.terminal_data);


  }

  // check if data loaded

  public isApiDataLoaded():BehaviorSubject<boolean> {
    return this.app_data_subject;
  }

  // getter Methods

  public getBlogUrl() {
    return this.app_api.blog_url;
  }

   public getTemplatesUrl() {
    return this.app_api.templates_url;
  }
  
  public getApiUrl() {
    return this.app_api.api_url;
  }

  public getPluginApiUrl() {
    return this.app_api.sharing_url;
  }

  public getNonce() {
    return this.app_api.nonce;
  }

  public isDevMode() {
    return this.is_dev_mode;
  }

  public getAutentificationToken() {
    return btoa(this.user.username + ":" + this.user.password);
  }

  // -------   Terminal methods ----------

  public isTerminal():boolean {
    return this.terminal_data.is_terminal;
  }

  public isTicketSystemOnline():boolean {
    return this.terminal_data.ticket_system_online;
  }
/*
  public toggleTerminal():void {
    this.test_toggle = !this.test_toggle;
    this.toggle_subject.next(this.test_toggle);
  }

  public getTerminalObservable():BehaviorSubject<boolean> {
    return this.toggle_subject;
  }
*/
  // -------   User methods ----------

  public isUserLoggedIn():boolean {
    return this.user_data.is_user_logged_in;
  }

  public isAdmin():boolean {
    return this.user_data.is_admin;
  }



}

