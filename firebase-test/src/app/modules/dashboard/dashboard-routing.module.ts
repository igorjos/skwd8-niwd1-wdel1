import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOutletComponent } from './dashboard-outlet/dashboard-outlet.component';
import { DirectoryListingComponent } from './directory-listing/directory-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';

const routes:Routes = [
  { 
    path: '',
    component: DashboardOutletComponent,
    children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'roles', component: RolesManagementComponent},
      { path: 'files', component: DirectoryListingComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
