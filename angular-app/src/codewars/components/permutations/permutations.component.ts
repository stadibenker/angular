import { Component } from '@angular/core';

@Component({
	selector: 'app-permutations',
	templateUrl: './permutations.component.html',
	styleUrls: ['./permutations.component.scss']
})
export class PermutationsComponent {
	public allPermuted (amount: bigint, n: bigint): bigint {
		if (amount === 1n) {
			return 0n;
		}
		if (amount === 2n) {
			return 1n;
		}
		// return (n-1n) * (this.allPermuted(amount - 1n, n) + this.allPermuted(amount - 2n, n));
		return n * this.allPermuted(amount - 1n, n) + ((-1n) ** n);
	}

	public factorial(n: number): number {
		if (n === 1) {
			return 1;
		}
		return n * this.factorial(n - 1);
	}
}
