import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { ApplicationsComponent } from './applications/applications.component';
import { EditPriceComponent } from './edit-price/edit-price.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "../shared/components/main-layout/shared.module";
import { AuthGuard } from "./shared/services/auth.guard";

@NgModule({
   declarations: [AdminLayoutComponent, ApplicationsComponent, EditPriceComponent, LoginPageComponent],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
         {
            path: '', component: AdminLayoutComponent, children: [
               { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
               { path: 'login', component: LoginPageComponent },
               { path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard] },
               { path: 'edit-price', component: EditPriceComponent, canActivate: [AuthGuard] }
            ]
         }
      ])
   ],
   exports: [RouterModule, SharedModule],
   providers: [AuthService, AuthGuard],
})
export class AdminModule {

}