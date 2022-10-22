import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistempComponent } from './cheflistemp.component';

describe('CheflistempComponent', () => {
  let component: CheflistempComponent;
  let fixture: ComponentFixture<CheflistempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
