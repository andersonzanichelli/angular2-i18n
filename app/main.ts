import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { getTranslationProviders } from './i18n-providers';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

getTranslationProviders().then(providers => {
  const options = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule, options);
});