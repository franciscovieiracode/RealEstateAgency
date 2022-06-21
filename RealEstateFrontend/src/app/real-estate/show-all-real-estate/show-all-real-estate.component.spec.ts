import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRealEstateComponent } from './show-all-real-estate.component';

describe('ShowAllRealEstateComponent', () => {
  let component: ShowAllRealEstateComponent;
  let fixture: ComponentFixture<ShowAllRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
