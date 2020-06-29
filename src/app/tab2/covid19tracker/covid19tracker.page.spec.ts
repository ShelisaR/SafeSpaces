import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Covid19trackerPage } from './covid19tracker.page';

describe('Covid19trackerPage', () => {
  let component: Covid19trackerPage;
  let fixture: ComponentFixture<Covid19trackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19trackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Covid19trackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
