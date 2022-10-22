import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateprojetComponent } from './chefcreateprojet.component';

describe('ChefcreateprojetComponent', () => {
  let component: ChefcreateprojetComponent;
  let fixture: ComponentFixture<ChefcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
