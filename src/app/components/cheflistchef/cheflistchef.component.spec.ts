import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistchefComponent } from './cheflistchef.component';

describe('CheflistchefComponent', () => {
  let component: CheflistchefComponent;
  let fixture: ComponentFixture<CheflistchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
