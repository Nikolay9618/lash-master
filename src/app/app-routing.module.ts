import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contacts', component: ContactsPageComponent },
      { path: 'portfolio', component: PortfolioPageComponent },
      { path: 'price', component: PricePageComponent }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
