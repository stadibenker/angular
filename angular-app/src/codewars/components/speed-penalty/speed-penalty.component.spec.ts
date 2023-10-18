import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedPenaltyComponent } from './speed-penalty.component';

describe('SpeedPenaltyComponent', () => {
let component: SpeedPenaltyComponent;
let fixture: ComponentFixture<SpeedPenaltyComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [SpeedPenaltyComponent]
		});
		fixture = TestBed.createComponent(SpeedPenaltyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
