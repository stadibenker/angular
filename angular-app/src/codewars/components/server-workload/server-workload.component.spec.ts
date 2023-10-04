import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerWorkloadComponent } from './server-workload.component';


/*
	Bob has a server farm crunching numbers. He has nodes servers in his farm. His company has a lot of work to do.

	The work comes as a number workload which indicates how many jobs there are. Bob wants his servers to get an equal number of jobs each. 
	If that is impossible, he wants the first servers to receive more jobs. He also wants the jobs sorted, so that the first server receives the first jobs.

	The way this works, Bob wants an array indicating which jobs are going to which servers.
*/

describe('ServerWorkloadComponent', () => {
	let component: ServerWorkloadComponent;
	let fixture: ComponentFixture<ServerWorkloadComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
		declarations: [ServerWorkloadComponent]
		});
		fixture = TestBed.createComponent(ServerWorkloadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('distribute', () => {
		it('should distribute the load evenly if amout of nodes = amout jobs', () => {
			const result = component.distributeJobs(2, 2);
			expect(result).toEqual([[0], [1]]);
		});
	})
});
