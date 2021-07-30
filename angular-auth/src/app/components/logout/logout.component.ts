import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  checkbox:any = false;

  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    // console.log(this.checkbox)
  
  this.auth.logout(this.checkbox).subscribe((res)=>{

    console.log(res);
    localStorage.removeItem('user');

    //redirect
    this.router.navigate(['/']);

    this.auth.toggleLogin(false);
  
  }, (err)=>{
    
    console.log(err);
  
  })
  }

}
