import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPrivateComponent } from './content-private.component';

describe('ContentPrivateComponent', () => {
  let component: ContentPrivateComponent;
  let fixture: ComponentFixture<ContentPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
