import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';


export interface Link {
  href: string;
  rel: string;
  type: string;
  label: string;
  params?: HttpParams;
}

export interface Links extends Array<Link> {}

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  public getHrefByReltype(links: Links, reltype: string): string {
    return links.find(link => link.rel === reltype).href;
  }

  public getLinkByReltype(links: Links, reltype: string): Link {
    return links.find(link => link.rel === reltype);
  }
}
