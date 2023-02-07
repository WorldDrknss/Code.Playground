import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, public userService:UserService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });

  login(){
    this.userService.login(this.loginForm.value).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
