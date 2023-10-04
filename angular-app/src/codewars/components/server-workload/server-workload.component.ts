import { Component } from '@angular/core';

@Component({
	selector: 'app-server-workload',
	templateUrl: './server-workload.component.html',
	styleUrls: ['./server-workload.component.scss']
})
export class ServerWorkloadComponent {

	// initNodes(), getDistributedJobs(), addNode(), addJob() - YAGNI

	public distributeJobs(nodesCount: number, jobsCount: number): number[][] {
		const result = [[]];
		return result;
	};
}
