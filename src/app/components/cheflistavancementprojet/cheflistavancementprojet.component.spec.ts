import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistavancementprojetComponent } from './cheflistavancementprojet.component';

describe('CheflistavancementprojetComponent', () => {
  let component: CheflistavancementprojetComponent;
  let fixture: ComponentFixture<CheflistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
