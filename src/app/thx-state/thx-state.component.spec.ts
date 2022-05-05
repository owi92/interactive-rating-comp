import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThxStateComponent } from './thx-state.component';

describe('ThxStateComponent', () => {
  let component: ThxStateComponent;
  let fixture: ComponentFixture<ThxStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThxStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
