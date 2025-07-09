import { Routes } from '@angular/router';
import { HomeComponent } from './home.component/home.component';
import { Demo } from './demo/demo';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact.component/contact.component';
import { AboutComponent } from './about.component/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'body', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'lazyloading',
    loadComponent: () =>
      import('./lazyloading/lazyloading.component').then(
        (m) => m.LazyloadingComponent
      ),
  },
];
