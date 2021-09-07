import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationWindowComponent } from './verification-window.component';

describe('VerificationWindowComponent', () => {
  let component: VerificationWindowComponent;
  let fixture: ComponentFixture<VerificationWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
