import { Component, OnInit } from '@angular/core';
import {EmailService} from "../email.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {

  msg:any = "";
  cfdata:any = "";
  constructor(private  emailservice: EmailService) { }

  ngOnInit() {
  }

  onSubmit(){
      this.emailservice.postEmail(this.cfdata)
        .subscribe(res => {
          this.msg = res;
        });
  }

}
