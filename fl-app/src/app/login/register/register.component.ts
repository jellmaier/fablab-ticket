import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CardData } from '../../services/parser.service';
import { NgForm } from '@angular/forms';

import { FocusModule } from 'angular2-focus';


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
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private register_message:string;
  private user: UserRegister;
  private cardset: boolean = false;
  private focus_password: true;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.user = { 
      username: '', 
      name: '', 
      surename: '', 
      email: '', 
      password: '',
      cardid: ''
    };
  }

  public submitRegistration():void {
    this.httpService.registerUser(this.user).subscribe(
      data =>  {
        //console.log(data);
        this.refresh();
      },
      err =>  {
        //console.log(err);
        this.register_message = err.error.message;
      }
      );



  }

  // ----------- for NfcLogin ---------------------------------

  public nfc_overlay_autohide: boolean = true; // show / hide overlay
  public nfc_button_label: string = 'Register with TU-Card'; // show / hide Label
  //public showHideNfcOverlay: Function;


  public onCardLoaded(card_data: CardData) {

    if (this.user.username == '' && card_data.name != null && card_data.surename != null ){
      this.user.username = card_data.name.toLowerCase() + card_data.surename.toLowerCase();
    }
    if (this.user.name == '' && card_data.name != null){
      this.user.name = card_data.name;
    }
    if (this.user.surename == '' && card_data.surename != null){
      this.user.surename = card_data.surename;
    }
    if (this.user.email == '' && card_data.email != null){
      this.user.email = card_data.email;
    }
    
    if ( card_data.cardid != null){
      this.user.cardid = card_data.cardid;
      this.cardset = true;
    }   
    
    this.focus_password = true;
    
  }

  private refresh(): void {
      window.location.reload();
  }

}
