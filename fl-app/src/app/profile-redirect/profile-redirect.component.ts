import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-profile-redirect',
  templateUrl: './profile-redirect.component.html',
  styleUrls: ['./profile-redirect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileRedirectComponent implements OnInit {

  constructor(private httpService: HttpService,
              private router: Router,
              private linkService: LinkService) { }

  ngOnInit(): void {
    this.loadResource();
  }

  loadResource():void {
    this.httpService.getCurrentResource().subscribe(
      data =>  {
        this.router.navigate(['/' + this.linkService.getHrefByReltype(data.links, 'related')]);
      },
      err =>  {
        console.log(err.error.message);
      }
    );
  }

}
