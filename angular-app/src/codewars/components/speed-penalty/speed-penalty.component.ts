import { Component } from '@angular/core';

@Component({
	selector: 'app-speed-penalty',
	templateUrl: './speed-penalty.component.html',
	styleUrls: ['./speed-penalty.component.scss']
})
export class SpeedPenaltyComponent {
	public getPenalty(parameters: number[]): number {
		return 0;
	}
}
