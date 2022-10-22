import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatechefComponent } from './admincreatechef.component';

describe('AdmincreatechefComponent', () => {
  let component: AdmincreatechefComponent;
  let fixture: ComponentFixture<AdmincreatechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreatechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
