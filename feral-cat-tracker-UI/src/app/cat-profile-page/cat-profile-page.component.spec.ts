import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProfilePageComponent } from './cat-profile-page.component';

describe('CatProfilePageComponent', () => {
  let component: CatProfilePageComponent;
  let fixture: ComponentFixture<CatProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatProfilePageComponent]
    });
    fixture = TestBed.createComponent(CatProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
