import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  router = inject(Router)

  onSubmit(){
    alert("Submitted Successfully!");
    this.router.navigateByUrl('home')
  }

}
