import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nComponent } from './i18n.component';

describe('I18nComponent', () => {
	let component: I18nComponent;
	let fixture: ComponentFixture<I18nComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [I18nComponent]
		});
		fixture = TestBed.createComponent(I18nComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('abbreviate', () => {
		test.each([
			['one', 'one'],
			['internationalization', 'i18n'],
			['elephant-ride', 'e6t-r2e'],
			['elephant-ride one sentence', 'e6t-r2e one s6e'],
		])
		('when words is %p, it should return abbribiation %p', (words, expectedResult) => {
			const result = component.abbreviate(words);
			expect(result).toEqual(expectedResult);
		});
	});
});
