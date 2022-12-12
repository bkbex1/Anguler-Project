import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FndUserProfileComponent } from './fnd-user-profile.component';

describe('FndUserProfileComponent', () => {
  let component: FndUserProfileComponent;
  let fixture: ComponentFixture<FndUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FndUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FndUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
