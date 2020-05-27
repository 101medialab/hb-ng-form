import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFieldsDemoComponent } from './array-fields-demo.component';

describe('ArrayFieldsDemoComponent', () => {
    let component: ArrayFieldsDemoComponent;
    let fixture: ComponentFixture<ArrayFieldsDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArrayFieldsDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArrayFieldsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
