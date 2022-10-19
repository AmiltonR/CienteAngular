import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporNombreComponent } from './buscarpor-nombre.component';

describe('BuscarporNombreComponent', () => {
  let component: BuscarporNombreComponent;
  let fixture: ComponentFixture<BuscarporNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarporNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarporNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
