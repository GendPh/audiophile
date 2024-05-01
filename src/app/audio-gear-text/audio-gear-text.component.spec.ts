import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioGearTextComponent } from './audio-gear-text.component';

describe('AudioGearTextComponent', () => {
  let component: AudioGearTextComponent;
  let fixture: ComponentFixture<AudioGearTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioGearTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioGearTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
