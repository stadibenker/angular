import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPuzzleComponent } from './numbers-puzzle.component';

describe('NumbersPuzzleComponent', () => {
	let component: NumbersPuzzleComponent;
	let fixture: ComponentFixture<NumbersPuzzleComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [NumbersPuzzleComponent]
		});
		fixture = TestBed.createComponent(NumbersPuzzleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('one_two_three', () => {
		test.each([
			[0, ['0', '0']],
			[1, ['1', '1']]
		])
		('when number is %p, it should return %p', (value: number, expectedResult: string[]) => {
			const result = component.one_two_three(value);
			expect(result).toStrictEqual(expectedResult);
		});
	})
});
