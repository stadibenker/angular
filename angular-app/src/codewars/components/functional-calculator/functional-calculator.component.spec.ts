import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalCalculatorComponent } from './functional-calculator.component';

describe('FunctionalCalculatorComponent', () => {
	let component: FunctionalCalculatorComponent;
	let fixture: ComponentFixture<FunctionalCalculatorComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [FunctionalCalculatorComponent]
		});
		fixture = TestBed.createComponent(FunctionalCalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('calculate', () => {
		it('should return 20', () => {
			const result = component.five(component.times(component.four()));
			expect(result).toBe(20);
		});

		it('should return 2', () => {
			const result = component.six(component.minus(component.four()));
			expect(result).toBe(2);
		});

		it('should return -2', () => {
			const result = component.four(component.minus(component.six()));
			expect(result).toBe(-2);
		});

		it('should return 10', () => {
			const result = component.six(component.plus(component.four()));
			expect(result).toBe(10);
		});

		it('should return 3', () => {
			const result = component.nine(component.divide(component.three()));
			expect(result).toBe(3);
		});

		it('should return 3', () => {
			const result = component.eight(component.divide(component.three()));
			expect(result).toBe(2);
		});

		it('should return 0', () => {
			const result = component.eight(component.times(component.zero()));
			expect(result).toBe(0);
		});

		it('should return Infinity', () => {
			const result = component.eight(component.divide(component.zero()));
			expect(result).toBe(Infinity);
		});
	});
});
