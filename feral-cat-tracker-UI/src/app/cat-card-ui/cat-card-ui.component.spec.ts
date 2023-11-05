import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardUiComponent } from './cat-card-ui.component';

describe('CatCardUiComponent', () => {
  let component: CatCardUiComponent;
  let fixture: ComponentFixture<CatCardUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatCardUiComponent]
    });
    fixture = TestBed.createComponent(CatCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
