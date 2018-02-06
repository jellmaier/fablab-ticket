import { Component, OnInit, isDevMode, enableProdMode } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { AppApiService } from 'app/services/app-api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './terminallogin.component.html',
  styleUrls: ['./terminallogin.component.css']
})
export class TerminalLoginComponent implements OnInit {

  private login_message: string;

  constructor(private httpService: HttpService,
              private appApiService: AppApiService) {}

  ngOnInit() {
  }

  public submitLogin(login_form: NgForm) {
    let username: string = login_form.controls['login'].value;
    let password: string = login_form.controls['password'].value;
    console.log(username);
    console.log(password);

    this.httpService.checkLogin(username, password).subscribe(
      data =>  {
        this.refresh();
      },
      err =>  {
        this.login_message = err.error.message;
      }
    );
  }



  // ----------- for NfcLogin ---------------------------------

  
  public nfc_login_message: string; // output to child

  public onCardLoaded(input: string) {
    console.log('input string' + input);


    this.httpService.checkLoginToken(input).subscribe(
      data =>  {
        this.nfc_login_message = "Karte gefunden!";
        this.refresh();
      },
      err =>  {
        console.log(err);
        this.nfc_login_message = "Karte nicht gefunden, bitte versuche es erneut!";
      }
    );
    
  }

  private refresh(): void {
      window.location.reload();
  }

}
