import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb:FormBuilder, public userService:UserService) {}

  ngOnInit(): void {
  }

  createAccountForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]]
  });

  create(){
    this.userService.createAccount(this.createAccountForm.value).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
