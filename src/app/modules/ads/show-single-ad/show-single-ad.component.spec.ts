import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleAdComponent } from './show-single-ad.component';

describe('ShowSingleAdComponent', () => {
  let component: ShowSingleAdComponent;
  let fixture: ComponentFixture<ShowSingleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
