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
		it('should not distribute the load if amount of jobs or nodes less than 1', () => {
			const result = component.distributeJobs(0, -1);
			expect(result).toEqual([]);
		});
		
		it('should distribute the load evenly if amout of nodes = amout jobs', () => {
			const result = component.distributeJobs(2, 2);
			expect(result).toEqual([[0], [1]]);
		});

		it('should distribute the load evenly if amout of nodes is multiple', () => {
			const result = component.distributeJobs(2, 4);
			expect(result).toEqual([[0, 2], [1, 3]]);
		});

		it('should distribute the load for one node if it single', () => {
			const result = component.distributeJobs(1, 3);
			expect(result).toEqual([[0, 1, 2]]);
		});

		it('should distribute the load by servers uniformly in ascending order', () => {
			const result = component.distributeJobs(3, 8);
			expect(result).toEqual([[0, 3, 6], [1, 4, 7], [2, 5]]);
		});
	})
});
