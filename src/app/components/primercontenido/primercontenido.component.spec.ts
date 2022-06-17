import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimercontenidoComponent } from './primercontenido.component';

describe('PrimercontenidoComponent', () => {
  let component: PrimercontenidoComponent;
  let fixture: ComponentFixture<PrimercontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimercontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimercontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
