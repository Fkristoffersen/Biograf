import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandystoreComponent } from './candystore.component';

describe('CandystoreComponent', () => {
  let component: CandystoreComponent;
  let fixture: ComponentFixture<CandystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
