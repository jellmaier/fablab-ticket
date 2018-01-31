import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLoginComponent } from './terminallogin.component';

describe('TerminalLoginComponent', () => {
  let component: TerminalLoginComponent;
  let fixture: ComponentFixture<TerminalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalLoginComponent ]
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
