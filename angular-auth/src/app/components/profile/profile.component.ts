import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  user:any;

  ngOnInit(): void {

    //Check Status
    this.auth.status().subscribe((res)=>{
      console.log(res);
    })


    this.auth.user().subscribe((res)=>{
      
      // console.log(res);
      this.user = res;
    
    }, (err)=>{
      
      console.log(err);

    });
  
  }

}
