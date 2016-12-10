import { Component, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getTranslationProviders } from './i18n-providers';
import { AppModule } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent  {
	locale:string = "en";

	constructor(private ngZone: NgZone) {
    }

	changeLocale() {
		document.locale = this.locale;

		this.ngZone.run(() => { 
			getTranslationProviders().then(providers => {
				const options = { providers };
				platformBrowserDynamic().bootstrapModule(AppModule, options);
			});
		});
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
