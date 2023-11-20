import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatProfilePageComponent } from './update-cat-profile-page.component';

describe('UpdateCatProfilePageComponent', () => {
  let component: UpdateCatProfilePageComponent;
  let fixture: ComponentFixture<UpdateCatProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCatProfilePageComponent]
    });
    fixture = TestBed.createComponent(UpdateCatProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
