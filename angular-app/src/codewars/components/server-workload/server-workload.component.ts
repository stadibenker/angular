import { Component } from '@angular/core';

@Component({
	selector: 'app-server-workload',
	templateUrl: './server-workload.component.html',
	styleUrls: ['./server-workload.component.scss']
})
export class ServerWorkloadComponent {

	// initNodes(), getDistributedJobs(), addNode(), addJob() - YAGNI

	private _createNodesArray(nodesCount: number, jobsCount: number): number[][] {
        const nodesWorkloadArray = new Array(nodesCount).fill(0);
        let nodeIndex = 0;
        for (let index = 0; index < Math.max(jobsCount, nodesCount); index++) {
			nodesWorkloadArray[nodeIndex]++;
            nodeIndex++;
            if (nodeIndex === nodesCount) {
                nodeIndex = 0;
            }
        }
		const nodesArray = new Array(nodesWorkloadArray.length).fill([]);
		nodesWorkloadArray.forEach((workload, i) => {
			nodesArray[i] = new Array(workload).fill(undefined);
		});
        return nodesArray;

	}

	private _fillNodesArray(nodesArray: number[][], jobsCount: number): number[][] {
		let jobIndex = 0;
		nodesArray.forEach(nodeChunk => {
			nodeChunk.forEach((_node, i) => {
				if(jobIndex < jobsCount) {
					nodeChunk[i] = jobIndex;
				}
				jobIndex++;
			});
		});
		return nodesArray;
	}

	public distributeJobs(nodesCount: number, jobsCount: number): number[][] {
		if (nodesCount <= 0 || jobsCount <=0) {
			return [];
		}
		let nodesArray = this._createNodesArray(nodesCount, jobsCount);
		nodesArray = this._fillNodesArray(nodesArray, jobsCount);
		return nodesArray;
	};
}
