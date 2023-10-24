import { Component } from '@angular/core';

@Component({
	selector: 'app-numbers-puzzle',
	templateUrl: './numbers-puzzle.component.html',
	styleUrls: ['./numbers-puzzle.component.scss']
})
export class NumbersPuzzleComponent {
	public one_two_three(value: number): string[] {
		if(value <= 0) {
			return ['0', '0'];
		}
		const result = [];
		let units = '';
		for(let i = 0; i < value; i++) {
			units += '1';
		}
		let weight = ''
		while(value > 0) {
			if(value >= 9) {
				weight += '9';
				value -=9;
			} else {
				weight += value;
				value -= value;
			}
		}
		return [weight, units];
	}
}
