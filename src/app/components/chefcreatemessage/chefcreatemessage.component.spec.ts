import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatemessageComponent } from './chefcreatemessage.component';

describe('ChefcreatemessageComponent', () => {
  let component: ChefcreatemessageComponent;
  let fixture: ComponentFixture<ChefcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
