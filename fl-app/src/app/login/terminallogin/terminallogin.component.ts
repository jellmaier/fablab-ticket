import { Component, OnInit, isDevMode, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { CardData } from '../../services/parser.service';
import { NgForm } from '@angular/forms';


    //let teststring:string = 'name:jakob, cardid:123456, nachname: hubert, email:jakob.ellmaier@gmx.at';   


@Component({
  selector: 'app-login',
  templateUrl: './terminallogin.component.html',
  styleUrls: ['./terminallogin.component.css']
})
export class TerminalLoginComponent implements OnInit {

  private login_message: string;

  constructor(private httpService: HttpService,
              private router: Router
              ) {}

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
  public nfc_button_label: string = 'Login with NFC-Card'; // show / hide Label

  public onCardLoaded(card_data: CardData) {

    console.log('input card' + card_data.cardid);
    console.log('input name' + card_data.name + ' ' + card_data.surename);

    this.httpService.checkLoginToken(card_data.cardid).subscribe(
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
