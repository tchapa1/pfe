import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistadminComponent } from './cheflistadmin.component';

describe('CheflistadminComponent', () => {
  let component: CheflistadminComponent;
  let fixture: ComponentFixture<CheflistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheflistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
