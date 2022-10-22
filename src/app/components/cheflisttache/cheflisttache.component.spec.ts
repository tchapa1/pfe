import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflisttacheComponent } from './cheflisttache.component';

describe('CheflisttacheComponent', () => {
  let component: CheflisttacheComponent;
  let fixture: ComponentFixture<CheflisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflisttacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
