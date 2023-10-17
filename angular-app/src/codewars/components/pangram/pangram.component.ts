import { Component } from '@angular/core';

@Component({
	selector: 'app-pangram',
	templateUrl: './pangram.component.html',
	styleUrls: ['./pangram.component.scss']
})
export class PangramComponent {
	private readonly _alphabet = 'abcdefghijklmnopqrstuvwxyz';
	
	public isPangram(sentence: string): boolean {
		if (!sentence || sentence.length === 0) {
			return false;
		}
		return this._alphabet.toLowerCase().split('').every(letter => sentence.toLowerCase().includes(letter));
	}
}
