import { Component, OnInit, isDevMode, enableProdMode } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { AppApiService } from 'app/services/app-api.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private showNfcLogin: boolean = false;
  private login_message: string;

  constructor(private httpService: HttpService,
              private appApiService: AppApiService) {}

  ngOnInit() {
    //this.httpService.getTerminalToken();
  }

  public showHideNfcLogin(val: boolean = null) {
    if(val == null)
      this.showNfcLogin = !this.showNfcLogin;
    else
      this.showNfcLogin = val;
  }

  public submitLogin(login_form: NgForm) {
    let username: string = login_form.controls['login'].value;
    let password: string = login_form.controls['password'].value;
    console.log(username);
    console.log(password);

    this.httpService.checkLogin(username, password).subscribe(
      data =>  {
        console.log("juhu");
        this.refresh();
      },
      err =>  {
        console.log(err);
        console.log("ney");
      }
    );
  }

  public submitCheckToken(nfc_form: NgForm) {
    console.log(nfc_form.controls['token'].value);

    this.httpService.checkLoginToken(nfc_form.controls['token'].value).subscribe(
      data =>  {
        this.login_message = "Karte gefunden!";
        this.refresh();
      },
      err =>  {
        console.log(err);
        this.login_message = "Karte nicht gefunden, bitte versuche es erneut!";
      }
    );

    nfc_form.reset();
  } 

  private refresh(): void {
      window.location.reload();
  }
}
