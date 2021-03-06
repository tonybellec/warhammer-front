import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevideoComponent } from './homevideo.component';

describe('HomevideoComponent', () => {
  let component: HomevideoComponent;
  let fixture: ComponentFixture<HomevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
