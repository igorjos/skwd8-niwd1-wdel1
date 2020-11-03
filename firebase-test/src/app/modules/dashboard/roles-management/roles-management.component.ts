import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolesService } from 'src/app/service/roles.service';

@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: ['./roles-management.component.less']
})
export class RolesManagementComponent implements OnInit {

  tabs:any = ['Roles', 'Users Roles'];
  activeTab = this.tabs[0];

  allRoles:Array<any> = [];

  constructor(
    private _rs:RolesService
  ) { }

  ngOnInit() {
    this._loadAllRoles();
  }

  private _loadAllRoles()
  {
    this._rs.getAllRoles().subscribe((roles:Array<any>) => {
      this.allRoles = roles;
    })
  }

  switchTab(value:string)
  {
    this.activeTab = value;
  }

  addNewRole(formData:NgForm)
  {
    if(formData.valid)
    { //{name: 'rolename'}
      this._rs.addNewRole(formData.value).subscribe((response) => {
        formData.reset();
        this._loadAllRoles();
      })
    }
  }

}
