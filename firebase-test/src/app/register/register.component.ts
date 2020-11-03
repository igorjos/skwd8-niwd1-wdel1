import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _auth:AuthService,
    private _router:Router
  ) { }

  ngOnInit() {
  }

  sendForm(formData:NgForm)
  {
    console.log(formData.value);

    if(formData.valid)
    {
      this._auth.register(formData.value).subscribe(data => { 
        
        formData.reset();
        this._router.navigate(['/login']);
      });
    }
  }
}
