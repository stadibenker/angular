import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		ParentComponent,
		ChildComponent,
		HighlightDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
