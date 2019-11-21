import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form with 2 controls', () => {
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();

  });

  it('should make username control required', () => {
    let control  = component.loginForm.get('username');
    control.setValue(' ');
    expect(control.valid).toBeFalsy();
  });

  it('should make password control required', () => {
    let control  = component.loginForm.get('password');
    control.setValue(' ');
    expect(control.valid).toBeFalsy();
  });

});
