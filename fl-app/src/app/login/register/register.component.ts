import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CardData } from '../../services/parser.service';
import { NgForm } from '@angular/forms';

import { FocusModule } from 'angular2-focus';


    //let teststring:string = 'name:jakob, cardid:123456, nachname: hubert, email:jakob.ellmaier@gmx.at';   

interface UserRegister {
  username: string;
  name: string;
  surename: string;
  email: string;
  password: string;
  cardid: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: UserRegister = { 
    username: '', 
    name: '', 
    surename: '', 
    email: '', 
    password: '',
    cardid: ''
  };

  private focus_password: true;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  // ----------- for NfcLogin ---------------------------------

  public nfc_overlay: boolean; // show / hide overlay
  public nfc_button_label: string = 'Register with TU-Card'; // show / hide Label

  public onCardLoaded(card_data: CardData) {

    if (this.user.username == '' && card_data.name != null && card_data.surename != null ){
      this.user.username = card_data.name.toLowerCase() + card_data.surename.toLowerCase();
    }
    if (this.user.name == ''){
      this.user.name = card_data.name;
    }
    if (this.user.surename == ''){
      this.user.surename = card_data.surename;
    }
    if (this.user.email == ''){
      this.user.email = card_data.email;
    }
    if (this.user.cardid == ''){
      this.user.cardid = card_data.cardid;
    }

    this.nfc_overlay = false;

    this.focus_password = true;
    
  }

  private refresh(): void {
      window.location.reload();
  }

}
