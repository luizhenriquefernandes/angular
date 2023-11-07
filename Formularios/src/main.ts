import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ClienteModule } from './app/cliente/cliente.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
