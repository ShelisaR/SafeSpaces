import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationaresourcesPage } from './educationaresources.page';

describe('EducationaresourcesPage', () => {
  let component: EducationaresourcesPage;
  let fixture: ComponentFixture<EducationaresourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationaresourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationaresourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
