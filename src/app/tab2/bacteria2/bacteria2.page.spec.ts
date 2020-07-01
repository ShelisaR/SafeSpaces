import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bacteria2Page } from './bacteria2.page';

describe('Bacteria2Page', () => {
  let component: Bacteria2Page;
  let fixture: ComponentFixture<Bacteria2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bacteria2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bacteria2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
