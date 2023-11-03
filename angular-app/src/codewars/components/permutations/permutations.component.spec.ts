import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationsComponent } from './permutations.component';

describe('PermutationsComponent', () => {
	let component: PermutationsComponent;
	let fixture: ComponentFixture<PermutationsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PermutationsComponent]
		});
		fixture = TestBed.createComponent(PermutationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('allPermuted', () => {
		test.each([
			//[1n, 0n],
			[4n, 9n],
			[5n, 44n],
			[6n, 265n],
			[30n, 97581073836835777732377428235481n]
		])
		('when amount is %p, it should return %p', (n, expectedResult) => {
			const result = component.allPermuted(n, n);
			expect(result).toEqual(expectedResult);
		});
	});

	describe('factorial', () => {
		test.each([
			[10, 3628800],
			[5, 120],
		])
		('when amount is %p, it should return %p', (n, expectedResult) => {
			const result = component.factorial(n);
			expect(result).toEqual(expectedResult);
		})
	})
});
