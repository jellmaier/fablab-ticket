import { Injectable } from '@angular/core';

import * as AppApiData from "./AppAPI.json";
import * as UserData from "./user.json";

export interface AppApiResponse {
  blog_url: string;
  templates_url: string;
  api_url: string;
  sharing_url: string;
  nonce: string;
}


interface User {
  username: string;
  password: string;
}

declare var AppAPI: any;


@Injectable()
export class AppApiService {

  private app_api: AppApiResponse;
  private user: User;
  private is_dev_mode: boolean;

  constructor() {
    this.loadApiData();
  }

  private loadApiData() {
    this.is_dev_mode = (typeof AppAPI === 'undefined');
    if (this.is_dev_mode) { // Check if it is embadded into the wordpress page
      this.app_api = (<AppApiResponse>(<any>AppApiData));
      this.user = (<User>(<any>UserData).admin); // switch between admin and user
    } else {
      console.log('Runing in Embadded-Mode');
      this.app_api = AppAPI;
    }
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

}

