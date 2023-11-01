import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcatComponent } from './logcat.component';

describe('LogcatComponent', () => {
  let component: LogcatComponent;
  let fixture: ComponentFixture<LogcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogcatComponent]
    });
    fixture = TestBed.createComponent(LogcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
