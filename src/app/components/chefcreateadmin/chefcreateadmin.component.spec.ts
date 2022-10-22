import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateadminComponent } from './chefcreateadmin.component';

describe('ChefcreateadminComponent', () => {
  let component: ChefcreateadminComponent;
  let fixture: ComponentFixture<ChefcreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
