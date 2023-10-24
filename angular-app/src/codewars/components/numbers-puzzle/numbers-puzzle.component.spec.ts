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
});
