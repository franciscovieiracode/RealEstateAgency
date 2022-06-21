import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRsToFavoriteListComponent } from './add-rs-to-favorite-list.component';

describe('AddRsToFavoriteListComponent', () => {
  let component: AddRsToFavoriteListComponent;
  let fixture: ComponentFixture<AddRsToFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRsToFavoriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRsToFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
