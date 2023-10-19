import { Component } from '@angular/core';

@Component({
	selector: 'app-speed-penalty',
	templateUrl: './speed-penalty.component.html',
	styleUrls: ['./speed-penalty.component.scss']
})
export class SpeedPenaltyComponent {
	private readonly _zero = '0';

	private _isZeroArray(conditionsArray: string[]): boolean {
		return conditionsArray.every(x => x === this._zero);
	}

	private _getBestNumbers2(conditionsArray: string[]): string[] {
		if (conditionsArray.length === 1) {
			return conditionsArray;
		}
		let bestNumbers: number[] = [];
		for(let i = 0; i < conditionsArray.length; i++) {
			if (i === conditionsArray.length - 1) {
				break;
			}
			const stuckNumber1 = BigInt(conditionsArray[i] + conditionsArray[i + 1]);
			const stuckNumber2 = BigInt(conditionsArray[i + 1] + conditionsArray[i]);
			const bestNumber = Number(stuckNumber1 < stuckNumber2 ? conditionsArray[i] : conditionsArray[i + 1]);
			if (!bestNumbers[0] || bestNumber < bestNumbers[0]) {
				bestNumbers = [bestNumber];
			} else if (bestNumbers[0] === bestNumber) {
				bestNumbers.push(bestNumber);
			}
		}
		return bestNumbers.map(number => number.toString());
	}

	private _getBestNumbers(conditionsArray: string[], rank: number): string[] {
		if (conditionsArray.length === 1 || conditionsArray.every(x => x === conditionsArray[0])) {
			return conditionsArray;
		}
		let result: string [] = [];
		conditionsArray.forEach(number => {
			if (!result[0]) {
				result = [number];
			} else if (number[rank] && number[rank] === result[0][rank] || number === result[0]) {
				result.push(number);
			} else if (number[rank] < result[0][rank] || number[rank] < result[0][rank - 1]) {
				result = [number];
			} else if (!number[rank] && result[0][rank] !== this._zero && number[rank - 1] < result[0][rank]) {
				result = [number];
			} else if (number[rank] === this._zero && !result[0][rank]) {
				result = [number];
			} else {
				return;
			}
		});
		return this._getBestNumbers(result, rank + 1);
	}

	private _createWholeNumberStr(array: string[]): string {
		return array.toString().replaceAll(',', '');
	}

	public getPenalty(conditionsArray: string[]): string {
		if(this._isZeroArray(conditionsArray)) {
			return this._zero;
		}
		let result: string[] = [];
		while (conditionsArray.length > 0) {
			const bestNumbers = this._getBestNumbers2(conditionsArray);
			result = [...result, ...bestNumbers];
			conditionsArray = conditionsArray.filter(x => x !== bestNumbers[0]);
		}
		const nonZeroIndex = result.lastIndexOf(this._zero);
		if (nonZeroIndex > -1) {
			result[0] = result[nonZeroIndex + 1];
			result[nonZeroIndex + 1] = this._zero;
		}
		return this._createWholeNumberStr(result);
	}
}
