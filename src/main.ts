import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuel
 } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
