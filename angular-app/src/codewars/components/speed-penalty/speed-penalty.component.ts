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

	private _getBestNumber (conditionsArray: string[]): string {
		let bestNumber = conditionsArray[0];
		conditionsArray.forEach(number => {
			bestNumber = this._compareInternalRanks(bestNumber, number);
		});
		return bestNumber;
	}

	private _compareInternalRanks(firstNumber: string, secondNumber: string): string {
		const lessNumber = firstNumber.length <= secondNumber.length ? firstNumber : secondNumber;
		const biggerNumber = firstNumber.length > secondNumber.length ? firstNumber : secondNumber;
		let lessRank = 0;
		for (let i = 0; i < biggerNumber.length; i++) {
			if(lessNumber[lessRank] !== biggerNumber[i]) {
				return lessNumber[lessRank] < biggerNumber[i] ? lessNumber : biggerNumber;
			}
			lessRank++;
			if (lessRank === lessNumber.length) {
				lessRank = 0
			}
		}
		return lessNumber;
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
			const bestNumber = this._getBestNumber(conditionsArray);
            result.push(bestNumber);
            const index = conditionsArray.findIndex(x => x === bestNumber);
            conditionsArray.splice(index, 1);
		}
		const nonZeroIndex = result.lastIndexOf(this._zero);
		if (nonZeroIndex > -1) {
			result[0] = result[nonZeroIndex + 1];
			result[nonZeroIndex + 1] = this._zero;
		}
		return this._createWholeNumberStr(result);
	}
}
