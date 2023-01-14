import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  show = false;


  public Login!: FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.Login = this.formBuilder.group({
      email: ['',Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }
  LogIn() {
    this.show = !this.show;
  }

  send(){
    
  }
}
