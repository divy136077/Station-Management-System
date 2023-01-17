import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbuddyComponent } from './chatbuddy.component';

describe('ChatbuddyComponent', () => {
  let component: ChatbuddyComponent;
  let fixture: ComponentFixture<ChatbuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
