import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgmenuComponent } from './pdgmenu.component';

describe('PdgmenuComponent', () => {
  let component: PdgmenuComponent;
  let fixture: ComponentFixture<PdgmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
