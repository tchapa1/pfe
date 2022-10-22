import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistprojetComponent } from './cheflistprojet.component';

describe('CheflistprojetComponent', () => {
  let component: CheflistprojetComponent;
  let fixture: ComponentFixture<CheflistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
