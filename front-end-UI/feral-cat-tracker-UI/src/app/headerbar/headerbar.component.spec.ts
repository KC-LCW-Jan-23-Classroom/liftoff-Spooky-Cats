import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbarComponent } from './headerbar.component';

describe('HeaderbarComponent', () => {
  let component: HeaderbarComponent;
  let fixture: ComponentFixture<HeaderbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderbarComponent]
    });
    fixture = TestBed.createComponent(HeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
