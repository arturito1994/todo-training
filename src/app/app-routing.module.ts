import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { PracownicyPageModule } from './pages/pracownicy.page-module';
import { EmployeeDetailPageModule } from './pages/employee-detail.page-module';
import { KontaktPageModule } from './pages/kontakt.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'about-us',
    loadChildren: () => AboutUsPageModule,
  },
  {
    path: 'hobbici',
    loadChildren: () => PracownicyPageModule,
  },
  {
    path: 'hobbici',
    loadChildren: () => EmployeeDetailPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => KontaktPageModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
