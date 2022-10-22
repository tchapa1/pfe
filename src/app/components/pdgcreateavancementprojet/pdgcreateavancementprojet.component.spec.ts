import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateavancementprojetComponent } from './pdgcreateavancementprojet.component';

describe('PdgcreateavancementprojetComponent', () => {
  let component: PdgcreateavancementprojetComponent;
  let fixture: ComponentFixture<PdgcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
