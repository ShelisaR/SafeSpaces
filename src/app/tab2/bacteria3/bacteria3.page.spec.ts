import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bacteria3Page } from './bacteria3.page';

describe('Bacteria3Page', () => {
  let component: Bacteria3Page;
  let fixture: ComponentFixture<Bacteria3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bacteria3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bacteria3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
