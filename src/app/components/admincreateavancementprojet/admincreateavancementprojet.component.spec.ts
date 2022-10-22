import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateavancementprojetComponent } from './admincreateavancementprojet.component';

describe('AdmincreateavancementprojetComponent', () => {
  let component: AdmincreateavancementprojetComponent;
  let fixture: ComponentFixture<AdmincreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
