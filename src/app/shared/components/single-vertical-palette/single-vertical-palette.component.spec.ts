import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVerticalPaletteComponent } from './single-vertical-palette.component';

describe('SingleVerticalPaletteComponent', () => {
  let component: SingleVerticalPaletteComponent;
  let fixture: ComponentFixture<SingleVerticalPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleVerticalPaletteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVerticalPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
