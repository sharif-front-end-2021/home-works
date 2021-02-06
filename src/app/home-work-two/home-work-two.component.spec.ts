import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkTwoComponent } from './home-work-two.component';

describe('HomeWorkTwoComponent', () => {
  let component: HomeWorkTwoComponent;
  let fixture: ComponentFixture<HomeWorkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWorkTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
