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
			['', false]
		])
		('when sentence is %p, isPangram should be %p', (sentence: string, expectedResult: boolean) => {
			const isPangram = component.isPangram(sentence);
			expect(isPangram).toBe(expectedResult);
		});
	});
});
