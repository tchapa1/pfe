import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreategroupeComponent } from './chefcreategroupe.component';

describe('ChefcreategroupeComponent', () => {
  let component: ChefcreategroupeComponent;
  let fixture: ComponentFixture<ChefcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreategroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
