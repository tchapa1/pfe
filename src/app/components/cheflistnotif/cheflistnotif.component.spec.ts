import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistnotifComponent } from './cheflistnotif.component';

describe('CheflistnotifComponent', () => {
  let component: CheflistnotifComponent;
  let fixture: ComponentFixture<CheflistnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
