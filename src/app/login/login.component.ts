import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formAjout:FormGroup;
  constructor(private service: RegisterService, private route: Router,) { }

  ngOnInit() {
    this.formAjout = new FormGroup({
      username: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    }); 
  }
  clogin(){
    this.service.loginUser(this.formAjout.value).subscribe((resultat:any) => {
      console.log(resultat);
      localStorage.setItem('token', resultat.access_token);
    });
    this.route.navigateByUrl('/addsuj');
    this.ngOnInit();
  }
}

