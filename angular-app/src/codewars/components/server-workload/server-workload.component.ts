import { Component } from '@angular/core';

@Component({
	selector: 'app-server-workload',
	templateUrl: './server-workload.component.html',
	styleUrls: ['./server-workload.component.scss']
})
export class ServerWorkloadComponent {

	// initNodes(), getDistributedJobs(), addNode(), addJob() - YAGNI

	public distributeJobs(nodesCount: number, jobsCount: number): number[][] {
		const result: number[][] = [];
		let nodeIndex = 0;
		for (let jobNumber = 0; jobNumber < jobsCount; jobNumber++) {
			result[nodeIndex] = result[nodeIndex] ?? [];
			result[nodeIndex].push(jobNumber);
			nodeIndex++;
			if (nodeIndex === nodesCount) {
				nodeIndex = 0;
			}
		}
		return result;
	};
}
