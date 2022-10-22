import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditmessageComponent } from './chefeditmessage.component';

describe('ChefeditmessageComponent', () => {
  let component: ChefeditmessageComponent;
  let fixture: ComponentFixture<ChefeditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefeditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
