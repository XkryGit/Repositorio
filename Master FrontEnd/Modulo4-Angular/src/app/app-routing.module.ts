import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/content/content-private/content-private.component';
import { CrudContentComponent } from './layout/content/content-private/crud/crud.component';
import { GalleryContentComponent } from './layout/content/content-private/gallery/gallery.component';
import { ProfileContentComponent } from './layout/content/content-private/profile/profile.component';
import { AboutUsContentComponent } from './layout/content/content-public/about-us/about-us.component';
import { HomeComponent } from './layout/content/content-public/content-public.component';
import { LoginContentComponent } from './layout/content/content-public/login/login.component';

const routes: Routes = [
  {
    path: 'menu',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about-us',
    component: AboutUsContentComponent,
  },
  {
    path: 'login',
    component: LoginContentComponent,
  },
  {
    path: 'gallery',
    component: GalleryContentComponent,
  },
  {
    path: 'crud',
    component: CrudContentComponent,
  },
  {
    path: 'profile',
    component: ProfileContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
