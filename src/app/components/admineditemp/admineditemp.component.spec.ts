import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditempComponent } from './admineditemp.component';

describe('AdmineditempComponent', () => {
  let component: AdmineditempComponent;
  let fixture: ComponentFixture<AdmineditempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
