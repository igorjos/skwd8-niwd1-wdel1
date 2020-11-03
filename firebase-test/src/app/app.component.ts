import { Component } from '@angular/core';
import { HealthcheckService } from './service/healthcheck.service';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'firebase-test';
  user:any; 

  constructor(
    private _hc:HealthcheckService,
    private _ps:ProfileService
  ){}

  ngOnInit(){
    // setInterval(() => {
    //   this.healthCheck();
    // }, 4000)

    this._ps.user.subscribe(value => {
      this.user = value;
    });

    this._checkUser();
  }

  healthCheck()
  {
    this._hc.check().subscribe((data) => {
      console.log(data)
    })
  }

  private _checkUser()
  {
    this._ps.getProfileData().subscribe(profile => {
      this._ps.user.next(true);
    }, (error) => {
      this._ps.user.next(false);
    })
  }
}
