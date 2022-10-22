import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistpdgComponent } from './cheflistpdg.component';

describe('CheflistpdgComponent', () => {
  let component: CheflistpdgComponent;
  let fixture: ComponentFixture<CheflistpdgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistpdgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistpdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
