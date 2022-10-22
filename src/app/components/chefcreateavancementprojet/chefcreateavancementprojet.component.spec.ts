import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateavancementprojetComponent } from './chefcreateavancementprojet.component';

describe('ChefcreateavancementprojetComponent', () => {
  let component: ChefcreateavancementprojetComponent;
  let fixture: ComponentFixture<ChefcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
