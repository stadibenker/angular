import { Component } from '@angular/core';

@Component({
	selector: 'app-permutations',
	templateUrl: './permutations.component.html',
	styleUrls: ['./permutations.component.scss']
})
export class PermutationsComponent {
	public allPermuted (n: bigint): bigint {
		if (n === 0n) {
			return 1n;
		}
		return n * this.allPermuted(n - 1n) + ((-1n) ** n);
	}

	public factorial(n: number): number {
		if (n === 1) {
			return 1;
		}
		return n * this.factorial(n - 1);
	}
}
