import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatecongeComponent } from './chefcreateconge.component';

describe('ChefcreatecongeComponent', () => {
  let component: ChefcreatecongeComponent;
  let fixture: ComponentFixture<ChefcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
