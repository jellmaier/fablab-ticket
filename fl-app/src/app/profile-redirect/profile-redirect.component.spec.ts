import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRedirectComponent } from './profile-redirect.component';

describe('ProfileRedirectComponent', () => {
  let component: ProfileRedirectComponent;
  let fixture: ComponentFixture<ProfileRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
