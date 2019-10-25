import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-addsuj',
  templateUrl: './addsuj.component.html',
  styleUrls: ['./addsuj.component.css']
})
export class AddsujComponent implements OnInit {
  formAjout:FormGroup;
  idSujet;
  id;
  constructor(private service: RegisterService) { }

  ngOnInit() {
    this.formAjout = new FormGroup({
      titre: new FormControl('',[Validators.required,]),
      description: new FormControl('',[Validators.required,]),
      vote: new FormControl('',[Validators.required,]),
    });
  }
addsj(){
    this.service.addsujet(this.formAjout.value).subscribe(resultat => {
      console.log(resultat)
    });
    this.ngOnInit();
  }
}
