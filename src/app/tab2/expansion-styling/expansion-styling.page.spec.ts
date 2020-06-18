import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpansionStylingPage } from './expansion-styling.page';

describe('ExpansionStylingPage', () => {
  let component: ExpansionStylingPage;
  let fixture: ComponentFixture<ExpansionStylingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionStylingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpansionStylingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
