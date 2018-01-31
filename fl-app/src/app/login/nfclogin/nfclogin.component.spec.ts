import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcloginComponent } from './nfclogin.component';

describe('NfcloginComponent', () => {
  let component: NfcloginComponent;
  let fixture: ComponentFixture<NfcloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfcloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
