import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerAddComponent } from './shortener-add.component';

describe('ShortenerAddComponent', () => {
  let component: ShortenerAddComponent;
  let fixture: ComponentFixture<ShortenerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
