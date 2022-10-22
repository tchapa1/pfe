import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateempComponent } from './chefcreateemp.component';

describe('ChefcreateempComponent', () => {
  let component: ChefcreateempComponent;
  let fixture: ComponentFixture<ChefcreateempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
