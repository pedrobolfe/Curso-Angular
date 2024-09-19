import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormsComponent } from './data-forms.component';

describe('DataFormsComponent', () => {
  let component: DataFormsComponent;
  let fixture: ComponentFixture<DataFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
