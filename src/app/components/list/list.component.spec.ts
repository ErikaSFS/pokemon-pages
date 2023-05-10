import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

    
    //teste de componente
     it('deve renderizar o componente corretamente', () => {
    expect(component).toBeTruthy();
    const titulo = fixture.nativeElement.querySelector('h1');
    expect(titulo.textContent).toContain('PokemonPage')
    });
    
    
    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
