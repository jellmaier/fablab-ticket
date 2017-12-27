import { Component, OnInit, isDevMode, enableProdMode } from '@angular/core';
import { HttpService } from 'app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getTerminalToken();
  }

}
