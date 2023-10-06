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
		it('should distribute the load by servers uniformly in ascending order 1', () => {
            const result = component.distributeJobs(4, 5);
            expect(result).toEqual([[0, 1], [2], [3], [4]]);
        });

        it('should distribute the load by servers uniformly in ascending order 2', () => {
            const result = component.distributeJobs(3, 2);
            expect(result).toStrictEqual([[0], [1], []]);
		});
		
		test.each([
			[3, 2, [[0], [1], []]],
			[4, 5, [[0, 1], [2], [3], [4]]],
			[4, 10, [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]],
			[3, 8, [[0, 1, 2], [3, 4, 5], [6, 7]]],
			[1, 3, [[0, 1, 2]]],
			[2, 4, [[0, 1], [2, 3]]],
			[-1, 1, []],
		],
		)('when nodes amount = %p, jobs amount = %p, result should be %p', (nodesCount: number, jobsCount, expectedResult) => {
			const result = component.distributeJobs(nodesCount, jobsCount);
			expect(result).toStrictEqual(expectedResult);
		});
	});
});
