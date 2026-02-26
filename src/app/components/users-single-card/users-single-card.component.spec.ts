import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSingleCardComponent } from './users-single-card.component';

describe('UsersSingleCardComponent', () => {
  let component: UsersSingleCardComponent;
  let fixture: ComponentFixture<UsersSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSingleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
