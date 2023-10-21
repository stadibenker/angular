import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedPenaltyComponent } from './speed-penalty.component';

/*
	You have been speeding on a motorway and a police car had to stop you. 
	The policeman is a funny guy that likes to play games. Before issuing penalty charge notice he gives you a choice to change your penalty.

	Your penalty charge is a combination of numbers like: 
	speed of your car, speed limit in the area, speed of the police car chasing you, the number of police cars involved, etc.
	So, your task is to combine the given numbers and make the penalty charge to be as small as possible.

	For example, if you are given numbers [45, 30, 50, 1] your best choice is 1304550
*/

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

	describe('speed penalty', () => {
		test.each([
			// [['0', '0', '0'], '0'],
			// [['1', '12', '1'], '1112'],
			// [['32', '3'], '323'],
			[['10', '100', '10', '1', '100'], '10010010101'],
			// [['100', '100', '1'], '1001001'],
			// [['100', '400', '4'], '1004004'],
			// [['100', '500', '4'], '1004500'],
			// [['4000', '100', '1'], '10014000'],
			// [['45', '30', '50', '1'], '1304550'],
			// [['0', '4', '1', '0', '2', '0'], '100024'],
			// [['2', '1', '0', '0'], '1002'],
			// [['9', '0', '0', '0'], '9000'],
			// [['9', '0', '0', '0'], '9000'],
			// [['0', '1519', '99999', '19999', '124', '6666'], '1240151919999666699999'],
			// [['201', '1519', '99999', '19999', '124', '6666'], '124151919999201666699999'],
			// [['618', '618624', '61862419'], '61861862419618624'],
			// [['618', '618777', '61866619'], '61861866619618777'],
		])
		('when parameters are %p, result should be %p', (conditions: string[], expectedResult: string) => {
			const result = component.getPenalty(conditions);
			expect(result).toEqual(expectedResult);
		});
	});
});
