import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
 selector: 'app-forms',
 templateUrl: './forms.component.html',
 styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 constructor() { }

 contactForm = new FormGroup({
 firstname: new FormControl(),
 lastname: new FormControl(),
 gender: new FormControl(),
 course: new FormControl()
}) 


 ngOnInit(): void {
 }

 onSubmit() {
 console.log(this.contactForm.value);
}
}
