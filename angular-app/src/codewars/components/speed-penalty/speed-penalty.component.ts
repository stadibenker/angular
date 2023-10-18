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
	
	private _getNumberFromArray(array: number[]): string {
		return array.toString().replaceAll(',', '');
	}

	public getPenalty(conditionsStrArray: string[]): string {
		const conditions = conditionsStrArray.map(x => Number(x));
		if (this._isZeroArray(conditions)) {
			return '0';
		}
		conditions.sort((c1, c2) => c1 - c2);
		const amountOfZero = conditions.lastIndexOf(0) + 1;
		if (amountOfZero > 0) {
			const filteredConditions = conditions.filter(x => x !== 0);
			const firstNumber = filteredConditions.shift();
			const optimizedPenalty = [firstNumber, ...new Array(amountOfZero).fill(0), ...filteredConditions];
			return this._getNumberFromArray(optimizedPenalty);
		}
		return this._getNumberFromArray(conditions);
	}
}
