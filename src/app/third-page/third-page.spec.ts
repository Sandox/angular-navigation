import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPage } from './third-page';

describe('ThirdPage', () => {
  let component: ThirdPage;
  let fixture: ComponentFixture<ThirdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
