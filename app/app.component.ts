import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getTranslationProviders } from './i18n-providers';
import { AppModule } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent  {
	locale:string = "en";

	constructor() {
    }

	changeLocale() {
		document.locale = this.locale;
		try {
			getTranslationProviders().then(providers => {
				platformBrowserDynamic().bootstrapModule(AppModule, { providers });
			});
		} catch(e) {
			console.log(e);
		}
	}

	pt_BR() {
		this.locale = "pt_BR";
		this.changeLocale();
	}

	en() {
		this.locale = "en";
		this.changeLocale();
	}
}
