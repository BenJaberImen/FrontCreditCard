import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardformsComponent } from './cardforms.component';

describe('CardformsComponent', () => {
  let component: CardformsComponent;
  let fixture: ComponentFixture<CardformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
