import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMomentComponent } from './components/pages/add-moment/add-moment.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthorizationMiddleware } from './middlewares/authorization/authorization.middleware';
import { PublicMiddleware } from './middlewares/public/public.middleware';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [PublicMiddleware],
  },
  {
    path: 'add-moment',
    component: AddMomentComponent,
    pathMatch: 'full',
    canActivate: [AuthorizationMiddleware],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
