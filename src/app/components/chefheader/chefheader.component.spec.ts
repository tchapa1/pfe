import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefheaderComponent } from './chefheader.component';

describe('ChefheaderComponent', () => {
  let component: ChefheaderComponent;
  let fixture: ComponentFixture<ChefheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
