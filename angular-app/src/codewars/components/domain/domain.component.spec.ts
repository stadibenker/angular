import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainComponent } from './domain.component';

describe('DomainComponent', () => {
	let component: DomainComponent;
	let fixture: ComponentFixture<DomainComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [DomainComponent]
		});
		fixture = TestBed.createComponent(DomainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('domain', () => {
		test.each([
			['http://google.com', 'google'],
			['http://google.co.jp', 'google'],
			['https://youtube.com', 'youtube'],
			['https://youtu.be/bFcfaCbd', 'youtu'],
		])
		('when url is %p, domain should be %p', (url, expectedResult) => {
			const result = component.getDomainName(url);
			expect(result).toEqual(expectedResult);
		});
	});
});
