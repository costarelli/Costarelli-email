import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailComponent } from './sent-email.component';

describe('SentEmailComponent', () => {
  let component: SentMailComponent;
  let fixture: ComponentFixture<SentMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentMailComponent]
    });
    fixture = TestBed.createComponent(SentMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
