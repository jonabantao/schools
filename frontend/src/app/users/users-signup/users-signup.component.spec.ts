import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignupComponent } from './users-signup.component';

describe('UsersSignupComponent', () => {
  let component: UsersSignupComponent;
  let fixture: ComponentFixture<UsersSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
