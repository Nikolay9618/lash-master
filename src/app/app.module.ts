import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { SharedModule } from './shared/components/main-layout/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import { RefDirective } from './shared/ref.directive';




registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AboutPageComponent,
    PricePageComponent,
    PortfolioPageComponent,
    ContactsPageComponent,
    ModalPageComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,


  ],
  providers: [],
  entryComponents: [ModalPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
