import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditavancementprojetComponent } from './pdgeditavancementprojet.component';

describe('PdgeditavancementprojetComponent', () => {
  let component: PdgeditavancementprojetComponent;
  let fixture: ComponentFixture<PdgeditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
