import { Component, OnInit } from '@angular/core';

import { AppApiService } from '../../services/app-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appApiService: AppApiService) {}

  ngOnInit() {
  }

}
