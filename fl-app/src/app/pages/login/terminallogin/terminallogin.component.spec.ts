import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLoginComponent } from './terminallogin.component';
import { NfcLoginComponent } from '../nfclogin/nfc-login.component';

describe('TerminalLoginComponent', () => {
  let component: TerminalLoginComponent;
  let fixture: ComponentFixture<TerminalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalLoginComponent, NfcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
