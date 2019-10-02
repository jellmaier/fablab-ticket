import { Component, OnInit } from '@angular/core';

import { AppApiService, UserData } from '../../../services/app-api.service';
import { BasicResource, HttpService } from '../../../services/http.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Link, LinkService } from '../../../services/link.service';
import { InputMask } from './input-mask/input-mask.component';
import { switchMap } from 'rxjs/operators';

interface LoginMask extends BasicResource {
  loginHeading: string;
  loginMessage: string;
  loginMask: InputMask;
  registerInfo: string;

}
interface LoginInfos extends BasicResource {
  userInfos: UserData;
  login?: LoginMask;
}

interface LoginPerformInfos extends BasicResource {
  userInfos?: UserData;
  loginFailed: boolean;
  loginMessage?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: LoginInfos;
  loginErrorMessage: string;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private linkService: LinkService,
              private appApiService: AppApiService) {}

  ngOnInit(): void {
    this.httpService.getCurrentResource<LoginInfos>()
      .subscribe((loginInfos: LoginInfos) => {
        this.handleLoginLoadInfos(loginInfos);
    });
  }

  private handleLoginLoadInfos(loginInfos: LoginInfos): void {
    if (loginInfos.userInfos.is_user_logged_in) {
      this.setLoginAndRedirect(loginInfos);
    } else {
      this.loginData = loginInfos;
    }
  }

  // submit methods

  submitClicked(link: Link): void {
    this.httpService.requestByLink<LoginPerformInfos>(link).pipe(
      switchMap((loginInfos: LoginPerformInfos) => {
        if (this.appApiService.isDevMode() && !loginInfos.loginFailed) {
          const dataLink: Link = this.linkService.getLinkByReltype(loginInfos._links, 'login-nonce');
          dataLink.params = link.params;
          return this.httpService.requestByLink<BasicResource>(dataLink);
        } else {
          this.refresh();
          return of(loginInfos);
        }
      }),
    ).subscribe((loginInfos: LoginPerformInfos) => {
      this.handleLoginInfos(loginInfos);
    });
  }

  private handleLoginInfos(loginInfos: LoginPerformInfos): void {
    if (loginInfos.loginFailed) {
      this.loginErrorMessage = loginInfos.loginMessage;
    } else {
      this.setLoginAndRedirect(loginInfos);
    }
  }

  private setLoginAndRedirect(loginInfos: LoginInfos | LoginPerformInfos): void {
    this.appApiService.setDevUserLoggedIn(loginInfos.userInfos);
    this.router.navigate(['/' + this.linkService.getHrefByReltype(loginInfos._links, 'related')]);
  }

  private refresh(): void {
    window.location.reload();
  }

}
