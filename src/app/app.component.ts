import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simbleCalculator';

  result:string = '';
  getValue(value:any)
  {
    this.result += value;
    console.log(this.result);
  }
  reset()
  {
    this.result = '';
  }
  getResult()
  {
    this.result  = eval(this.result);
  }
}
