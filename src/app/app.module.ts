import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceComponent } from './components/service/service.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { OpinionComponent } from './components/opinion/opinion.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardServiceComponent } from './components/card-service/card-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServiceComponent,
    PreferenceComponent,
    OpinionComponent,
    ContactComponent,
    FooterComponent,
    CardServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
