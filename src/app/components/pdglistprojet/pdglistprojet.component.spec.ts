import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistprojetComponent } from './pdglistprojet.component';

describe('PdglistprojetComponent', () => {
  let component: PdglistprojetComponent;
  let fixture: ComponentFixture<PdglistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
