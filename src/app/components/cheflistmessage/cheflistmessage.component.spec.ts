import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistmessageComponent } from './cheflistmessage.component';

describe('CheflistmessageComponent', () => {
  let component: CheflistmessageComponent;
  let fixture: ComponentFixture<CheflistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
