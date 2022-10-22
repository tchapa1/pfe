import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdglisttacheComponent } from './pdglisttache.component';

describe('PdglisttacheComponent', () => {
  let component: PdglisttacheComponent;
  let fixture: ComponentFixture<PdglisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdglisttacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdglisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
