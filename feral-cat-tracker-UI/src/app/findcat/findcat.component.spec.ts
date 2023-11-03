import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcatComponent } from './findcat.component';

describe('FindcatComponent', () => {
  let component: FindcatComponent;
  let fixture: ComponentFixture<FindcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindcatComponent]
    });
    fixture = TestBed.createComponent(FindcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
