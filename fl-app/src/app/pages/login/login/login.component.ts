import { Component, OnInit } from '@angular/core';

import { AppApiService } from '../../../services/app-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private appApiService: AppApiService) {}

  ngOnInit(): void {
  }

}
