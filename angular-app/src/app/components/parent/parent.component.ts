import { Component } from '@angular/core';

@Component({
	selector: 'ts-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
	public userText: string = '';
}
