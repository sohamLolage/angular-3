import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupExampleComponent } from './formgroup-example.component';

describe('FormgroupExampleComponent', () => {
  let component: FormgroupExampleComponent;
  let fixture: ComponentFixture<FormgroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgroupExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
