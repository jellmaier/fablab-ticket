import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { CardData, ParserService } from '../../../services/parser.service';
import { AppApiService } from '../../../services/app-api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-nfclogin',
  templateUrl: './nfc-login.component.html',
  styleUrls: ['./nfc-login.component.scss']
})
export class NfcLoginComponent implements OnInit {

  @Input() nfcMessage: string;
  @Input() autoHide:boolean = false;
  private showNfcOverlay: boolean = false;
  @Input() nfcButtonLabel: string;
  @Output() onCardLoaded: EventEmitter<CardData> = new EventEmitter<CardData>();

  constructor(private httpService: HttpService,
              private appApiService: AppApiService,
              private parserService: ParserService) {}

  ngOnInit():void {

  }

  private showHideNfcOverlay(val: boolean = null):void {
    if (val == null) {
      this.showNfcOverlay = !this.showNfcOverlay;
    } else {
      this.showNfcOverlay = val;
    }
  }



  public submitCheckToken(nfcForm: NgForm):void {
    //console.log(nfcForm.controls['token'].value);

    let cardData: CardData = this.parserService.parseCardData(nfcForm.controls['token'].value);

    this.onCardLoaded.emit(cardData);

    if (this.autoHide) {
      this.showHideNfcOverlay(false);
    }

    nfcForm.reset();
  }

}

