import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSucursalesComponent } from './consultar-sucursales.component';

describe('ConsultarSucursalesComponent', () => {
  let component: ConsultarSucursalesComponent;
  let fixture: ComponentFixture<ConsultarSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarSucursalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
