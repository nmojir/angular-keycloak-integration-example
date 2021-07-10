import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuploaderComponent } from './myuploader.component';

describe('MyuploaderComponent', () => {
  let component: MyuploaderComponent;
  let fixture: ComponentFixture<MyuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
