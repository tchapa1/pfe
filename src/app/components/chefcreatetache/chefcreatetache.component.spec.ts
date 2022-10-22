import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatetacheComponent } from './chefcreatetache.component';

describe('ChefcreatetacheComponent', () => {
  let component: ChefcreatetacheComponent;
  let fixture: ComponentFixture<ChefcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatetacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
