import { Component, EventEmitter, OnInit } from '@angular/core';

import { AppApiService } from '../../../services/app-api.service';
import { BasicResource, HttpService } from '../../../services/http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Link, LinkService } from '../../../services/link.service';
import { InputMask } from './input-mask/input-mask.component';

interface LoginMask extends BasicResource {
  loginHeading: string;
  loginMessage: string;
  loginMask: InputMask;
  registerInfo: string;

}
interface LoginInfos extends BasicResource {
  loggedIn: boolean;
  login: LoginMask;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData$: Observable<LoginInfos>;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private linkService: LinkService,
              private appApiService: AppApiService) {}

  ngOnInit(): void {
    this.loginData$ = this.httpService.getCurrentResource<LoginInfos>();
  }

  submitClicked(link: Link): void {
    this.httpService.requestByLink<any>(link).subscribe();
  }

}
