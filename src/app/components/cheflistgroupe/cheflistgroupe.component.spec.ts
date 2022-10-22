import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistgroupeComponent } from './cheflistgroupe.component';

describe('CheflistgroupeComponent', () => {
  let component: CheflistgroupeComponent;
  let fixture: ComponentFixture<CheflistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
