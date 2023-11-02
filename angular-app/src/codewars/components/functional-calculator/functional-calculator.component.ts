import { Component } from '@angular/core';

@Component({
	selector: 'app-functional-calculator',
	templateUrl: './functional-calculator.component.html',
	styleUrls: ['./functional-calculator.component.scss']
})
export class FunctionalCalculatorComponent {
	//	add = 1
	//	minus = 2
	//	times = 3
	//	divide = 4

	private _executeOperation(value1: number, value2: number, operation: number) {
		let result;
		switch(operation) {
			case 1:
				result = value1 + value2;
				break;
			case 2:
				result = value1 - value2;
				break;
			case 3:
				result = value1 * value2;
				break;
			case 4:
				result = value1 / value2;
				break;
			default:
				throw Error('Unsupported operaiton.')
		}
		return Math.floor(result);
	}

	public zero(args?: any) {
		const value = 0;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public one(args?: any) {
		const value = 1;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public two(args?: any) {
		const value = 2;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public three(args?: any) {
		const value = 3;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public four(args?: any) {
		const value = 4;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public five(args?: any) {
		const value = 5;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public six(args?: any) {
		const value = 6;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public seven(args?: any) {
		const value = 7;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public eight(args?: any) {
		const value = 8;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public nine(args?: any) {
		const value = 9;
		if (args) {
			return this._executeOperation(value, args[1], args[0]);
		}
		return value;
	}

	public plus(value: number) {
		return [1, value];
	}

	public minus(value: number) {
		return [2, value];
	}

	public times(value: number) {
		return [3, value];
	}

	public divide(value: number) {
		return [4, value];
	}
}
