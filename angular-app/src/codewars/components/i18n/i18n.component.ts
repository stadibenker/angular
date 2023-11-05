import { Component } from '@angular/core';

@Component({
	selector: 'app-i18n',
	templateUrl: './i18n.component.html',
	styleUrls: ['./i18n.component.scss']
})
export class I18nComponent {
	public abbreviate(sentence: string) {
		let result = '';
		const delimitersReg = new RegExp(' |-|,', 'g');
		let words = sentence.split(delimitersReg);
		let delimiters = Array.from(sentence.matchAll(delimitersReg));
		words.forEach((word, i) => {
			result += word.length >= 4 ? `${word[0]}${word.length - 2}${word[word.length - 1]}` : word;
			result += delimiters[i] ? delimiters[i] : '';
		});
		return result;
	}
}
