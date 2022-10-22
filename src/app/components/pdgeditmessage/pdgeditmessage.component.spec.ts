import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgeditmessageComponent } from './pdgeditmessage.component';

describe('PdgeditmessageComponent', () => {
  let component: PdgeditmessageComponent;
  let fixture: ComponentFixture<PdgeditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgeditmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdgeditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
