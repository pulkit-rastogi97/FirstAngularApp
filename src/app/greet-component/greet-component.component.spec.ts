import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetComponentComponent } from './greet-component.component';

describe('GreetComponentComponent', () => {
  let component: GreetComponentComponent;
  let fixture: ComponentFixture<GreetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
