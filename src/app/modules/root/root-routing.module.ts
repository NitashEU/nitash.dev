import { RootCVComponent } from './pages/cv/cv.page';
import { RootOverviewComponent } from './pages/overview/overview.page';
import { RootRootComponent } from './pages/root/root.page';
import { RootSortingVisualiserComponent } from './pages/sorting-visualiser/sorting-visualiser.page';
import { Route } from '@angular/router';

export const rootRoute: Route = {
  path: '',
  component: RootRootComponent,
  children: [
    {
      path: 'overview',
      component: RootOverviewComponent
    },
    {
      path: 'cv',
      component: RootCVComponent
    },
    {
      path: 'sorting-visualiser',
      component: RootSortingVisualiserComponent
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'overview'
    }
  ]
};
