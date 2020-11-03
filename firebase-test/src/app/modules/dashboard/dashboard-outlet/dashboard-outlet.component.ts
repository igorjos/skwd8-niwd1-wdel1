import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-outlet',
  templateUrl: './dashboard-outlet.component.html',
  styleUrls: ['./dashboard-outlet.component.less']
})
export class DashboardOutletComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
    
  }

}
