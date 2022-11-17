import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderPublicComponent } from './layout/header/header-public/header-public.component';
import { HeaderPrivateComponent } from './layout/header/header-private/header-private.component';
import { CrudContentComponent } from './layout/content/content-private/crud/crud.component';
import { LoginContentComponent } from './layout/content/content-public/login/login.component';
import { AboutUsContentComponent } from './layout/content/content-public/about-us/about-us.component';
import { GalleryContentComponent } from './layout/content/content-private/gallery/gallery.component';
import { ProfileContentComponent } from './layout/content/content-private/profile/profile.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    CrudContentComponent,
    LoginContentComponent,
    AboutUsContentComponent,
    GalleryContentComponent,
    ProfileContentComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
