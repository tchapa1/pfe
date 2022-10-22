import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefedittacheComponent } from './chefedittache.component';

describe('ChefedittacheComponent', () => {
  let component: ChefedittacheComponent;
  let fixture: ComponentFixture<ChefedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefedittacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
