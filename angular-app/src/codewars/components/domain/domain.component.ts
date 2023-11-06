import { Component } from '@angular/core';

@Component({
	selector: 'app-domain',
	templateUrl: './domain.component.html',
	styleUrls: ['./domain.component.scss']
})
export class DomainComponent {
	public getDomainName(url: string): string | undefined {
		const domainRegex = new RegExp(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n.\?\=]+)/im);
		const matches = url.match(domainRegex);
		return matches?.[1];
	}
}
