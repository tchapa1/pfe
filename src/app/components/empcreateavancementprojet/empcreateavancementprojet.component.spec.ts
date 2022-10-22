import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreateavancementprojetComponent } from './empcreateavancementprojet.component';

describe('EmpcreateavancementprojetComponent', () => {
  let component: EmpcreateavancementprojetComponent;
  let fixture: ComponentFixture<EmpcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpcreateavancementprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
