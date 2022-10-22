import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistgroupeComponent } from './pdglistgroupe.component';

describe('PdglistgroupeComponent', () => {
  let component: PdglistgroupeComponent;
  let fixture: ComponentFixture<PdglistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
