import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercertpComponent } from './tercertp.component';

describe('TercertpComponent', () => {
    let component: TercertpComponent;
    let fixture: ComponentFixture<TercertpComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TercertpComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TercertpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
