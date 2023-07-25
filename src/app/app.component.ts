import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user = 'John Doe';
  items = [
    {description: 'do dishes', action: "no"},
    {description: 'walk the dog', action: "true"},
    {description: 'clean the house', action: "false"},
    {description: 'do laundry', action: "false"},
    {description: 'take out trash', action: "false"},
    {description: 'make dinner', action: "false"},
    {description: 'wash the car', action: "false"},
  ]
}
