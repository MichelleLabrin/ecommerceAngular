import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdetailComponent } from './pdetail.component';

describe('PdetailComponent', () => {
  let component: PdetailComponent;
  let fixture: ComponentFixture<PdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdetailComponent]
    });
    fixture = TestBed.createComponent(PdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
