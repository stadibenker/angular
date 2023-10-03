import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[highlight]'
})
export class HighlightDirective {

	@Input()
	textValue: string = '';


	constructor(private el: ElementRef) { 
	}

	private _applyComponentAdditionalLogic(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
	}

	@HostListener('click') onCLick() {
		this._applyComponentAdditionalLogic(this.el);
		console.info(this.textValue);
	}
}
