import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReviewsComponent } from './details-reviews.component';

describe('DetailsReviewsComponent', () => {
  let component: DetailsReviewsComponent;
  let fixture: ComponentFixture<DetailsReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsReviewsComponent]
    });
    fixture = TestBed.createComponent(DetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
