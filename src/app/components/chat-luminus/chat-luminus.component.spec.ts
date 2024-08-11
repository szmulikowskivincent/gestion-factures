import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLuminusComponent } from './chat-luminus.component';

describe('ChatLuminusComponent', () => {
  let component: ChatLuminusComponent;
  let fixture: ComponentFixture<ChatLuminusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatLuminusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLuminusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
