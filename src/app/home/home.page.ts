import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
//import {}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    //private itemsService: ItemService
  ){}

  ngOnInit(){
    this.login_form = this.formBuilder.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  login(data){
    console.log(data.username,data.password);
    //this.
  }

}
