import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAdvertismentsComponent } from './latest-advertisments.component';

describe('LatestAdvertismentsComponent', () => {
  let component: LatestAdvertismentsComponent;
  let fixture: ComponentFixture<LatestAdvertismentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAdvertismentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAdvertismentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
