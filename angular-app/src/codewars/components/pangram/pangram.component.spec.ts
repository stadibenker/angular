import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangramComponent } from './pangram.component';

describe('PangramComponent', () => {
let component: PangramComponent;
let fixture: ComponentFixture<PangramComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [PangramComponent]
		});
		fixture = TestBed.createComponent(PangramComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('is pangram', () => {
		test.each([
			['', false],
			['abc', false],
			['The quick brown fox jumps over the lazy dog', true],
			['@The \'quick brown fox,jumps over the lazy dog _', true],
			['The quick brown fox,jumps over the lazy do', false],
			['Pack my box with five dozen liquor jugs.', true],
		])
		('when sentence is %p, isPangram should be %p', (sentence: string, expectedResult: boolean) => {
			const isPangram = component.isPangram(sentence);
			expect(isPangram).toBe(expectedResult);
		});
	});
});
