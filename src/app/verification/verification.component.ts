import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VerificationWindowComponent } from '../verification-window/verification-window.component';

@Component({
  selector: 'verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  Auth: any = ""
  newVerify: any
  
constructor( public dialog: MatDialog) { }

ngOnInit() {}

  checker(){
    window.location.href = "https://www.onecause.com/h/"  
  }
  openDialog() {
    this.dialog.open(VerificationWindowComponent, {
     
    });
  }

  checkme(){
    var time = new Date();
    let newVerify = time.toLocaleString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric', }).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    console.log(newVerify)

    this.Auth == newVerify ? this.checker()  : this.openDialog()


   }



}
