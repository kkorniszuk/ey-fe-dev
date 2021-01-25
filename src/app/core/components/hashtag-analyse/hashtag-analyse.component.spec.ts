import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagAnalyseComponent } from './hashtag-analyse.component';

describe('HashtagAnalyseComponent', () => {
  let component: HashtagAnalyseComponent;
  let fixture: ComponentFixture<HashtagAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashtagAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
