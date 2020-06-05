import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: `<div>
  Inline template Example

  <h2 class= "text-sucess">
  {{greetUser()}}</h2>       
  <h2>
  {{siteUrl}}</h2>
  </div>
  <input [id]="myId" type="text" value ="Mishal">   
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value ="Mishal">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value ="Mishal">

  <h2 [class]="successClass">Welcome Mishal Raj</h2>

  <h2 class ="text-special" [class]="successClass">Welcome Mishal Raj</h2>
  <h2 [class.text-danger]="hasError">Mishal Raj </h2>

  <h2 [ngClass]="messageClasses">Mishal Raj </h2>

  <h2 [style.color]="hasError?'red':'orange'"> StyleBinding</h2>

  <h2 [style.color]="hilightColor"> Style Binding 2</h2>

  <h2 [ngStyle]="styles"> Style Binding 3</h2>

  <button (click)="onClick($event)">Greet</button>
  {{greeting}}
 <br/>
  <button (click)="greeting='welcome mishal'">Greet</button>
  {{greeting}}  

  <br/> <br/>
  <input #myInput type="text">
  <button (click)="logMessage(myInput)">Log</button>


  <br/> <br/>
  <input [(ngModel)]="nm" type="text">
  {{nm}}

  `,
  styleUrls: [`
  
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
   `]
})
export class TestComponent implements OnInit {

  public name = "mishal";
  public myId="testId";
  public greeting="";

  public nm="";
  public pass="";

  public isSuccess=true;
  public siteUrl=window.location.href;
  public successClass="text-success";
  public hasError= true;

  public hilightColor="blue";

  public isDisabled=false;

  public isSpecial=true;

  public messageClasses={
    "text-success":this.isSuccess,
    "text-special":this.isSpecial,
    "text-danger":this.hasError
  }

  public styles={
    color:"cyan",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  greetUser()
  {
    return "hello"+ this.name;
  }

  onClick(event)
  {
    console.log(event);
    this.greeting="Mishal";
  }

  logMessage(value)
  {
    console.log(value);
  }

}
