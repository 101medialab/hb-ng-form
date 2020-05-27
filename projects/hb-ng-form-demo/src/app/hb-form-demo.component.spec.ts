import { TestBed, async } from '@angular/core/testing';
import { HbFormDemoComponent } from './hb-form-demo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HbFormDemoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HbFormDemoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hb-ng-form-demo'`, () => {
    const fixture = TestBed.createComponent(HbFormDemoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hb-ng-form-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HbFormDemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hb-ng-form-demo app is running!');
  });
});
