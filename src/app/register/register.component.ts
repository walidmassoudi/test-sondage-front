import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formAjout:FormGroup;
  constructor(private service: RegisterService) { }

  ngOnInit() {
    this.formAjout = new FormGroup({
      firstname: new FormControl('',),
      lastname: new FormControl('',),
      username: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
  }
  addUser(){
    this.service.addUser(this.formAjout.value).subscribe(resultat => {
      console.log(resultat)
    });
    this.ngOnInit();
  }
}
