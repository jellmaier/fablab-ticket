import { Component, OnInit } from '@angular/core';

declare var AppAPI: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  private app_api: any;

  constructor() {
    this.app_api = AppAPI;
  }

  ngOnInit() {
    console.log("URLa: " + this.app_api.sharing_url);
    console.log(this.app_api);
  }

}
