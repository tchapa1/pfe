import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglistadminComponent } from './pdglistadmin.component';

describe('PdglistadminComponent', () => {
  let component: PdglistadminComponent;
  let fixture: ComponentFixture<PdglistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
