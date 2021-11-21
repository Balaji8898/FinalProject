import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetqouteComponent } from './getqoute.component';

describe('GetqouteComponent', () => {
  let component: GetqouteComponent;
  let fixture: ComponentFixture<GetqouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetqouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetqouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
