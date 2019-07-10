import { Injectable } from '@angular/core';


export interface Link {
  href: string;
  rel: string;
  type: string;
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
