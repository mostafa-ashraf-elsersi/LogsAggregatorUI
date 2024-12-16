import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemsTableComponent } from './log-items-table.component';

describe('LogItemsTableComponent', () => {
  let component: LogItemsTableComponent;
  let fixture: ComponentFixture<LogItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogItemsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
