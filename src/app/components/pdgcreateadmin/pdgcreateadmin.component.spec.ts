import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgcreateadminComponent } from './pdgcreateadmin.component';

describe('PdgcreateadminComponent', () => {
  let component: PdgcreateadminComponent;
  let fixture: ComponentFixture<PdgcreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgcreateadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgcreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
