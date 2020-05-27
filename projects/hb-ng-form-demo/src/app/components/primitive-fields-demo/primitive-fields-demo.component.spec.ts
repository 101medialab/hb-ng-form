import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveFieldsDemoComponent } from './primitive-fields-demo.component';

describe('PrimitiveFieldsDemoComponent', () => {
    let component: PrimitiveFieldsDemoComponent;
    let fixture: ComponentFixture<PrimitiveFieldsDemoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrimitiveFieldsDemoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrimitiveFieldsDemoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
