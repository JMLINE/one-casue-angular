import { VerificationComponent } from './../verification/verification.component';
import { Component, OnInit } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string = "";
password: string = "";

constructor(private http: HttpClient, public dialog: MatDialog) { }

ngOnInit() {}
checker(){
  localStorage.getItem("isValid") === "True" ? window.location.href = "https://www.onecause.com/h/" : console.log("no")

}
openDialog() {
  this.dialog.open(DialogBoxComponent, {
   
  });
}

openVerification(){
  this.dialog.open(VerificationComponent)
}

login(){
  let formData = {
        email: this.email,
        password: this.password,   
    };
    const headers = { "Content-Type": "application/json" };
    this.http.post<any>("http://localhost:8080/login", formData, {headers}).subscribe(
      
      res =>{
        localStorage.setItem("isValid", "True")
        console.log(res, "No error")
        this.openVerification()
       
      }, 
      err =>{
        localStorage.setItem("isValid", "False")
        console.log(err, "Incorrect email")
        this.openDialog()
            }
    )
  } 
}

