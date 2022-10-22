import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistavancementtacheComponent } from './cheflistavancementtache.component';

describe('CheflistavancementtacheComponent', () => {
  let component: CheflistavancementtacheComponent;
  let fixture: ComponentFixture<CheflistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
