import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public userService:UserService, private router:Router) { }

  ngOnInit(): void {
    if(this.userService.user == undefined){
      let str = localStorage.getItem('user');
      if(str != null){
        this.userService.user = JSON.parse(str);
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
