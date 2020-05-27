import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiContainerDemoComponent } from './di-container-demo.component';

describe('DiContainerDemoComponent', () => {
    let component: DiContainerDemoComponent;
    let fixture: ComponentFixture<DiContainerDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiContainerDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiContainerDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
