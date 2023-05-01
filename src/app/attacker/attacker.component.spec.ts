import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackerComponent } from './attacker.component';

describe('AttackerComponent', () => {
  let component: AttackerComponent;
  let fixture: ComponentFixture<AttackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
