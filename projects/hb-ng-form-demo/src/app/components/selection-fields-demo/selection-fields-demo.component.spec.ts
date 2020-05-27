import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionFieldsDemoComponent } from './selection-fields-demo.component';

describe('SelectionFieldsDemoComponent', () => {
    let component: SelectionFieldsDemoComponent;
    let fixture: ComponentFixture<SelectionFieldsDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectionFieldsDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectionFieldsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
