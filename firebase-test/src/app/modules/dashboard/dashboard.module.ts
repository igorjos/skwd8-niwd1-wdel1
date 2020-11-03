import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOutletComponent } from './dashboard-outlet/dashboard-outlet.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { DirectoryListingComponent } from './directory-listing/directory-listing.component';



@NgModule({
  declarations: [DashboardOutletComponent, ProfileComponent, RolesManagementComponent, DirectoryListingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
