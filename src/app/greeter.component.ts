import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  // selector: "do-greet",
  template: `
    <div>Hi {{ name }}!</div>
    <button (click)="doGreet()">Greet!</button>
  `,
  styles: [],
})
export class GreeterComponent implements OnInit {
  @Input() name: string;
  @Output() greet = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  doGreet() {
    this.greet.emit(`Hi, ${this.name}`);
  }
}
