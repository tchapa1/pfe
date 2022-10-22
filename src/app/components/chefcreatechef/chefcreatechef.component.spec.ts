import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatechefComponent } from './chefcreatechef.component';

describe('ChefcreatechefComponent', () => {
  let component: ChefcreatechefComponent;
  let fixture: ComponentFixture<ChefcreatechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreatechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
