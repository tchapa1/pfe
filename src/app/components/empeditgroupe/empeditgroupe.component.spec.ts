import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditgroupeComponent } from './empeditgroupe.component';

describe('EmpeditgroupeComponent', () => {
  let component: EmpeditgroupeComponent;
  let fixture: ComponentFixture<EmpeditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeditgroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
