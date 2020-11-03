import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private _auth:AuthService,
    private _router:Router,
    private _ps:ProfileService
  ) { }

  ngOnInit() {
  }

  sendForm(formData:NgForm)
  {
    if(formData.valid)
    {
      this._auth.login(formData.value).subscribe((data) => {
        this._ps.user.next(true);
        this._router.navigate(['/dashboard']);
        //window.location.href = '/dashboard';
      })
    }
  }

}
