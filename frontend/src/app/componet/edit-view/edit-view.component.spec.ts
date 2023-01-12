import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditviewComponent } from './edit-view.component';

describe('EditviewComponent', () => {
  let component: EditviewComponent;
  let fixture: ComponentFixture<EditviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
