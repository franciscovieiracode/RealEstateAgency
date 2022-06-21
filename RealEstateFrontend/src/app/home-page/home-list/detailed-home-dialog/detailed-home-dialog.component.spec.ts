import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedHomeDialogComponent } from './detailed-home-dialog.component';

describe('DetailedHomeDialogComponent', () => {
  let component: DetailedHomeDialogComponent;
  let fixture: ComponentFixture<DetailedHomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedHomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedHomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
