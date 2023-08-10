import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortdiscriptionComponent } from './shortdiscription.component';

describe('ShortdiscriptionComponent', () => {
  let component: ShortdiscriptionComponent;
  let fixture: ComponentFixture<ShortdiscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortdiscriptionComponent]
    });
    fixture = TestBed.createComponent(ShortdiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
