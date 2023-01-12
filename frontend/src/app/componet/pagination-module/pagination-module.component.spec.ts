import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationModuleComponent } from './pagination-module.component';

describe('PaginationModuleComponent', () => {
  let component: PaginationModuleComponent;
  let fixture: ComponentFixture<PaginationModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
