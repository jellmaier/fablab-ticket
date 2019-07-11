import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { CardData } from '../../services/parser.service';
import { NgForm } from '@angular/forms';
import { AppApiService, UserData } from '../../services/app-api.service';
import { appRoutes } from '../../app-routs';


//let teststring:string = 'name:jakob, cardid:123456, nachname: hubert, email:jakob.ellmaier@gmx.at';


@Component({
  selector: 'app-login',
  templateUrl: './terminallogin.component.html',
  styleUrls: ['./terminallogin.component.scss']
})
export class TerminalLoginComponent implements OnInit {

  private loginMessage: string;

  constructor(private httpService: HttpService,
              private router: Router,
              private appApi: AppApiService,
              ) {}

  ngOnInit(): void {
  }

  public submitLogin(loginForm: NgForm): void {
    let username: string = loginForm.controls['login'].value;
    let password: string = loginForm.controls['password'].value;
    
    this.httpService.checkLogin(username, password).subscribe(
      data =>  {

        if (this.appApi.isDevMode()) {
          this.httpService.getUserData(username, password).subscribe(
            (data: UserData) =>  {
              this.appApi.setDevUserLoggedIn(data);
              this.router.navigate(['/' + appRoutes.profiles]);
            },
            err =>  {
              this.loginMessage = err.error.message;
            }
          );
        } else {
          this.refresh();
        }

      },
      err =>  {
        this.loginMessage = err.error.message;
      }
    );
  }



  // ----------- for NfcLogin ---------------------------------

  
  public nfcLoginMessage: string = 'Achtung: Du musst die Karte zuerst zu deinem Account hinzufügen!'; // output to child
  public nfcButtonLabel: string = 'Login with NFC-Card'; // show / hide Label

  public onCardLoaded(cardData: CardData): void {

    console.log('input card' + cardData.cardid);
    console.log('input name' + cardData.name + ' ' + cardData.surename);

    this.httpService.checkLoginToken(cardData.cardid).subscribe(
      data =>  {
        this.nfcLoginMessage = 'Karte gefunden!';
        this.refresh();
      },
      err =>  {
        console.log(err);
        this.nfcLoginMessage = 'Karte nicht gefunden, bitte versuche es erneut!';
      }
    );
    
  }

  private refresh(): void {
      window.location.reload();
  }

}
