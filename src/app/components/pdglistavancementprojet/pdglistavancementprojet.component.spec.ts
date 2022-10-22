import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistavancementprojetComponent } from './pdglistavancementprojet.component';

describe('PdglistavancementprojetComponent', () => {
  let component: PdglistavancementprojetComponent;
  let fixture: ComponentFixture<PdglistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
