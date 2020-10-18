import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikebookComponent } from './bikebook.component';

describe('BikebookComponent', () => {
  let component: BikebookComponent;
  let fixture: ComponentFixture<BikebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
