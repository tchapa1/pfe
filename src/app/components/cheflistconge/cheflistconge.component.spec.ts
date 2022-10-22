import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistcongeComponent } from './cheflistconge.component';

describe('CheflistcongeComponent', () => {
  let component: CheflistcongeComponent;
  let fixture: ComponentFixture<CheflistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistcongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
