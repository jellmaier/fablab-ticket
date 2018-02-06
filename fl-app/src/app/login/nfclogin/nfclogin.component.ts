import { Component, OnInit, isDevMode, enableProdMode, EventEmitter, Input, Output} from '@angular/core';
import { HttpService } from 'app/services/http.service';
import { AppApiService } from 'app/services/app-api.service';
import { NgForm } from '@angular/forms';

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
  @Output() onCardLoaded = new EventEmitter<string>();

  private showNfcOverlay: boolean = false;


  constructor(private httpService: HttpService,
              private appApiService: AppApiService) {}

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

    this.onCardLoaded.emit(nfc_form.controls['token'].value);

    nfc_form.reset();
  } 



  
}

