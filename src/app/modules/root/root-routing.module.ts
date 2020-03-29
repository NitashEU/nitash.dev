import { RootCVComponent } from './pages/cv/cv.page';
import { RootRootComponent } from './pages/root/root.page';
import { Route } from '@angular/router';

export const rootRoute: Route = {
  path: '',
  component: RootRootComponent,
  children: [
    {
      path: 'cv',
      component: RootCVComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'cv'
    }
  ]
};
