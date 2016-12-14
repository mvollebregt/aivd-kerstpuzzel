import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  input: string;
  inputChars : string[];
  mappings : Map<String, String> = new Map();

  inputChanged() : void {
    this.input = this.input.toUpperCase();
    this.inputChars = Array.from(this.input);
  }

  alterMapping([inputChar, mappedChar] : [string, string]) {
    this.mappings.set(inputChar, mappedChar);
  }
}
