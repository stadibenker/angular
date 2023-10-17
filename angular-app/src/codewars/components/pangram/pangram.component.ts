import { Component } from '@angular/core';

@Component({
	selector: 'app-pangram',
	templateUrl: './pangram.component.html',
	styleUrls: ['./pangram.component.scss']
})
export class PangramComponent {
	public isPangram(sentence: string): boolean {
		if(!sentence || sentence.length === 0) {
			return false;
		}
		return true;
	}
}
