import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatenotifComponent } from './chefcreatenotif.component';

describe('ChefcreatenotifComponent', () => {
  let component: ChefcreatenotifComponent;
  let fixture: ComponentFixture<ChefcreatenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatenotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
