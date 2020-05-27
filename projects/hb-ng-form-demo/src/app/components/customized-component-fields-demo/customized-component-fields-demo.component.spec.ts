import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedComponentFieldsDemoComponent } from './customized-component-fields-demo.component';

describe('CustomizedComponentFieldsDemoComponent', () => {
    let component: CustomizedComponentFieldsDemoComponent;
    let fixture: ComponentFixture<CustomizedComponentFieldsDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomizedComponentFieldsDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomizedComponentFieldsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
