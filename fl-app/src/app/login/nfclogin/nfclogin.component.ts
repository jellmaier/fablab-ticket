import { Component, OnInit, isDevMode, enableProdMode } from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { AppApiService } from 'app/services/app-api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-nfclogin',
  templateUrl: './nfclogin.component.html',
  styleUrls: ['./nfclogin.component.css']
})
export class NfcloginComponent implements OnInit {
 
  private nfc_login_message: string;

  constructor(private httpService: HttpService,
              private appApiService: AppApiService) {}

  ngOnInit() {
    //this.httpService.getTerminalToken();
  }


  public submitCheckToken(nfc_form: NgForm) {
    console.log(nfc_form.controls['token'].value);

    this.httpService.checkLoginToken(nfc_form.controls['token'].value).subscribe(
      data =>  {
        this.nfc_login_message = "Karte gefunden!";
        this.refresh();
      },
      err =>  {
        console.log(err);
        this.nfc_login_message = "Karte nicht gefunden, bitte versuche es erneut!";
      }
    );

    nfc_form.reset();
  } 

  private refresh(): void {
      window.location.reload();
  }
}

