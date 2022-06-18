import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleWordComponent } from './puzzle-word.component';

describe('PuzzleWordComponent', () => {
  let component: PuzzleWordComponent;
  let fixture: ComponentFixture<PuzzleWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
