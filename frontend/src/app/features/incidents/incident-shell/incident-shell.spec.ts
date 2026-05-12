import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentShell } from './incident-shell';

describe('IncidentShell', () => {
  let component: IncidentShell;
  let fixture: ComponentFixture<IncidentShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentShell],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
