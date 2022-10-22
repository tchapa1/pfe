import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateavancementtacheComponent } from './admincreateavancementtache.component';

describe('AdmincreateavancementtacheComponent', () => {
  let component: AdmincreateavancementtacheComponent;
  let fixture: ComponentFixture<AdmincreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
