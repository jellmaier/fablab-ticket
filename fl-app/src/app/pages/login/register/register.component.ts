import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CardData } from '../../../services/parser.service';
import { appRoutes } from '../../../app-routs';


//let teststring:string = 'name:jakob, cardid:123556, nachname: hubert, email:jakob.ellmaier@gmx.at';

export interface UserRegister {
  username: string;
  name: string;
  surename: string;
  email: string;
  password: string;
  cardid: string;
  terminaltoken?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerMessage:string;
  private user: UserRegister;
  private cardset: boolean = false;
  private focusPassword:boolean;

  private appRoutes:any = appRoutes;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.user = {
      username: '',
      name: '',
      surename: '',
      email: '',
      password: '',
      cardid: ''
    };
  }

  public submitRegistration(): void {
    this.httpService.registerUser(this.user).subscribe(
      data =>  {
        //console.log(data);
        this.refresh();
      },
      err =>  {
        //console.log(err);
        this.registerMessage = err.error.message;
      }
      );



  }

  // ----------- for NfcLogin ---------------------------------

  public nfcOverlayAutohide: boolean = true; // show / hide overlay
  public nfcButtonLabel: string = 'Register with TU-Card'; // show / hide Label
  //public showHideNfcOverlay: Function;


  public onCardLoaded(cardData: CardData): void {

    if (this.user.username === '' && cardData.name != null && cardData.surename != null ) {
      this.user.username = cardData.name.toLowerCase() + cardData.surename.toLowerCase();
    }
    if (this.user.name === '' && cardData.name != null) {
      this.user.name = cardData.name;
    }
    if (this.user.surename === '' && cardData.surename != null) {
      this.user.surename = cardData.surename;
    }
    if (this.user.email === '' && cardData.email != null) {
      this.user.email = cardData.email;
    }
    
    if ( cardData.cardid != null) {
      this.user.cardid = cardData.cardid;
      this.cardset = true;
    }
    
    this.focusPassword = true;
    
  }

  private refresh(): void {
      window.location.reload();
  }

}
