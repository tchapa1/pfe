import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatepdgComponent } from './chefcreatepdg.component';

describe('ChefcreatepdgComponent', () => {
  let component: ChefcreatepdgComponent;
  let fixture: ComponentFixture<ChefcreatepdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatepdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatepdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
