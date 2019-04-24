import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
authenticateState: Observable<boolean>;
return: string = "";
  login_form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(){
   this.route.queryParams.subscribe(params =>
      this.return = params['return'] || '/dashboard');

    this.login_form = this.formBuilder.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  login(data){
    console.log(data.username,data.password);
    this.authService.login().then(
      res=>this.router.navigateByUrl(this.return)
    );
  }

}
