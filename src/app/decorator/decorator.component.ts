import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements AfterViewInit {
  @ViewChild('someInput') someInput!: ElementRef;
  

ngAfterViewInit() {
  console.log(this.someInput);
}

}


