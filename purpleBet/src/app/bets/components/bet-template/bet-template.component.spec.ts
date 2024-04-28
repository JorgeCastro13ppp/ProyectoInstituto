import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetTemplateComponent } from './bet-template.component';

describe('BetTemplateComponent', () => {
  let component: BetTemplateComponent;
  let fixture: ComponentFixture<BetTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
