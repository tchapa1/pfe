import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditavancementprojetComponent } from './empeditavancementprojet.component';

describe('EmpeditavancementprojetComponent', () => {
  let component: EmpeditavancementprojetComponent;
  let fixture: ComponentFixture<EmpeditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
