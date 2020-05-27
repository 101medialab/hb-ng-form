import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFieldsDemoComponent } from './object-fields-demo.component';

describe('ObjectFieldsDemoComponent', () => {
    let component: ObjectFieldsDemoComponent;
    let fixture: ComponentFixture<ObjectFieldsDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjectFieldsDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjectFieldsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
