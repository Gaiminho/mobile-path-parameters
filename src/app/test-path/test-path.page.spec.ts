import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPathPage } from './test-path.page';

describe('TestPathPage', () => {
  let component: TestPathPage;
  let fixture: ComponentFixture<TestPathPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
