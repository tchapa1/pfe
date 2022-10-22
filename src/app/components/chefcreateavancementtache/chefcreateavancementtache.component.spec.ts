import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateavancementtacheComponent } from './chefcreateavancementtache.component';

describe('ChefcreateavancementtacheComponent', () => {
  let component: ChefcreateavancementtacheComponent;
  let fixture: ComponentFixture<ChefcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateavancementtacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
