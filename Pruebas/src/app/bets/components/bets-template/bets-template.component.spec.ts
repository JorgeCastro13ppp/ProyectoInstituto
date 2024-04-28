import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsTemplateComponent } from './bets-template.component';

describe('BetsTemplateComponent', () => {
  let component: BetsTemplateComponent;
  let fixture: ComponentFixture<BetsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
