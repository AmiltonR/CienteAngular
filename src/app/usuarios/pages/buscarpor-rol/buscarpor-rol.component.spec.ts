import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporRolComponent } from './buscarpor-rol.component';

describe('BuscarporRolComponent', () => {
  let component: BuscarporRolComponent;
  let fixture: ComponentFixture<BuscarporRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarporRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarporRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
