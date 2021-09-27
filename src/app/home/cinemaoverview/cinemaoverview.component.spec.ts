import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaoverviewComponent } from './cinemaoverview.component';

describe('CinemaoverviewComponent', () => {
  let component: CinemaoverviewComponent;
  let fixture: ComponentFixture<CinemaoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
