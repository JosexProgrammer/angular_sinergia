import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundocontenidoComponent } from './segundocontenido.component';

describe('SegundocontenidoComponent', () => {
  let component: SegundocontenidoComponent;
  let fixture: ComponentFixture<SegundocontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundocontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundocontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
