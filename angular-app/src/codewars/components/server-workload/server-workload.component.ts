import { Component } from '@angular/core';

@Component({
	selector: 'app-server-workload',
	templateUrl: './server-workload.component.html',
	styleUrls: ['./server-workload.component.scss']
})
export class ServerWorkloadComponent {

	// initNodes(), getDistributedJobs(), addNode(), addJob() - YAGNI

	private _createNodesArray(nodesCount: number, jobsCount: number): number[][] {
        const nodesArray: number[][] = [];
        let nodeIndex = 0;
        for (let jobNumber = 0; jobNumber < jobsCount; jobNumber++) {
            nodesArray[nodeIndex] = nodesArray[nodeIndex] ?? [];
            nodesArray[nodeIndex].push(-1);
            nodeIndex++;
            if (nodeIndex === nodesCount) {
                nodeIndex = 0;
            }
        }
        return nodesArray;
	}

	private _fillNodesArray(nodesArray: number[][]): number[][] {
		let jobIndex = 0;
		nodesArray.forEach(nodeChunk => {
			nodeChunk.forEach((_node, i) => {
				nodeChunk[i] = jobIndex;
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
		nodesArray = this._fillNodesArray(nodesArray);
		return nodesArray;
	};
}
