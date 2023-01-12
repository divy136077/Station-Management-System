import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddviewComponent } from './add-view.component';

describe('AddviewComponent', () => {
  let component: AddviewComponent;
  let fixture: ComponentFixture<AddviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
