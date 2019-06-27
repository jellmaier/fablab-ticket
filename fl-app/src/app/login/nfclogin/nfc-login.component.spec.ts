import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcLoginComponent } from './nfc-login.component';

describe('NfcLoginComponent', () => {
  let component: NfcLoginComponent;
  let fixture: ComponentFixture<NfcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
