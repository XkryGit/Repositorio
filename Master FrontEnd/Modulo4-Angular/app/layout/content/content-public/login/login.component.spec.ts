import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContentComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginContentComponent;
  let fixture: ComponentFixture<LoginContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
