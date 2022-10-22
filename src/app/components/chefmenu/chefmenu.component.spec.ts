import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefmenuComponent } from './chefmenu.component';

describe('ChefmenuComponent', () => {
  let component: ChefmenuComponent;
  let fixture: ComponentFixture<ChefmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
