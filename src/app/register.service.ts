import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
id;
ARTICLES;
  constructor(private http: HttpClient) { }

  addUser (formUser) {

    return this.http.post('http://localhost:3000/USERS/register', formUser);
  }
  loginUser (formUser1) {
    return this.http.post('http://localhost:3000/USERS/login', formUser1);
  }
  addsujet (formUser2):any {
    let header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post('http://localhost:3000/SUJET/AddSujet', formUser2,{headers: header});
  }
  listsujet (SUJET) {
    let header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get('http://localhost:3000/SUJET/GetAllSujet',{headers: header});
  }
  Modifsujet (id,formUser5) {
    let header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post('http://localhost:3000/SUJET/ModifSujet/' +id, formUser5,{headers: header});
  }
  GetOnesujet (sujet) {
    let header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get('http://localhost:3000/SUJET/GetOneSujet/'+ sujet,{headers: header});
  }
  
  listUser () {
    let header = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get('http://localhost:3000/USERS/GetAllUser',{headers: header});
  }
}
