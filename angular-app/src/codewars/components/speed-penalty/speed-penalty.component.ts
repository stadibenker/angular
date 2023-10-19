import { Component } from '@angular/core';

@Component({
	selector: 'app-speed-penalty',
	templateUrl: './speed-penalty.component.html',
	styleUrls: ['./speed-penalty.component.scss']
})
export class SpeedPenaltyComponent {
	private _isZeroArray(array: number[]): boolean {
		return array.every(x => x === 0);
	}
	
	private _createWholeNumberStr(array: string[]): string {
		return array.toString().replaceAll(',', '');
	}

	/*
		conditions = conditions without zero
		while(conditions.length > 0) {
			bestNumber = this._getBestNumber(conditions);
			bestNumberArray += bestNumber;
			conditions -= bestNumber;
		}
		bestNumberArray = bestNumberArray[0] + zerozArray + bestNumberArray
	*/

	private _getBestNumbers(conditionsArray: string[], rank: number): string[] {
		if (conditionsArray.length === 1 || conditionsArray.every(x => x === conditionsArray[0])) {
			return conditionsArray;
		}
		let result: string [] = [];
		conditionsArray.forEach(number => {
			if (!result[0] && number !== '0') {
				result = [number];
			} else if (number[rank] && number[rank] === result[0][rank]) {
				result.push(number);
			} else if (number[rank] < result[0][rank]) {
				result = [number];
			} else if (!number[rank] && result[0][rank] !== '0') {
				result = [number];
			} else if (number[rank] === '0' && !result[0][rank]) {
				result = [number];
			} else {
				return;
			}
		});
		return this._getBestNumbers(result, rank + 1);
	}

	public getPenalty(conditionsArray: string[]): string {
		let result: string[] = [];
		while (conditionsArray.length > 0) {
			const bestNumbers = this._getBestNumbers(conditionsArray, 0);
			result = [...result, ...bestNumbers];
			conditionsArray = conditionsArray.filter(x => x !== bestNumbers[0]);
		}
		return this._createWholeNumberStr(result);
	}
}
