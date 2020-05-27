import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesTutorialComponent } from './themes-tutorial.component';

describe('ThemesTutorialComponent', () => {
    let component: ThemesTutorialComponent;
    let fixture: ComponentFixture<ThemesTutorialComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ThemesTutorialComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThemesTutorialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
