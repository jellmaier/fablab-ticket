import { Component, OnInit, isDevMode, enableProdMode, EventEmitter, Input, Output} from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ParserService, CardData } from '../../services/parser.service';
import { AppApiService } from '../../services/app-api.service';
import { NgForm } from '@angular/forms';

import { FocusModule } from 'angular2-focus';


enum NfcMode {
    login    = 1,
    register = 2,
    setcard  = 3
}

@Component({
  selector: 'app-nfclogin',
  templateUrl: './nfclogin.component.html',
  styleUrls: ['./nfclogin.component.css']
})
export class NfcloginComponent implements OnInit {

  @Input()  nfc_message: string;
  @Input()  showNfcOverlay: boolean = false;
  @Input()  nfcButtonLabel: string;
  @Output() onCardLoaded = new EventEmitter<CardData>();


  constructor(private httpService: HttpService,
              private appApiService: AppApiService,
              private parserService: ParserService) {}

  ngOnInit() {

  }

  public showHideNfcOverlay(val: boolean = null) {
    if(val == null)
      this.showNfcOverlay = !this.showNfcOverlay;
    else
      this.showNfcOverlay = val;

  }



  public submitCheckToken(nfc_form: NgForm):void {
    console.log(nfc_form.controls['token'].value);

    let card_data: CardData = this.parserService.parseCardData(nfc_form.controls['token'].value);

    this.onCardLoaded.emit(card_data);

    nfc_form.reset();
  } 



  
}

