import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousenquiryComponent } from './previousenquiry.component';

describe('PreviousenquiryComponent', () => {
  let component: PreviousenquiryComponent;
  let fixture: ComponentFixture<PreviousenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
