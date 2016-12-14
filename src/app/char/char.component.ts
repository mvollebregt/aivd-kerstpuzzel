import {Component, Input, Output, EventEmitter, DoCheck} from "@angular/core";

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements DoCheck {

  @Input() inputChar : string;
  @Input() mappings : Map<string, string>;
  @Output() mappingChanged = new EventEmitter<[string, string]>();

  mappedChar : string;
  connected: boolean = true;

  mappedCharChanged() : void {
    this.mappedChar = this.mappedChar.toUpperCase();
    if (this.connected) {
      this.mappingChanged.emit([this.inputChar, this.mappedChar]);
    }
  }

  fixedChanged() : void {
    this.neemMappingOver();
  }

  isLetter() : boolean {
    return /\w/.test(this.inputChar);
  }

  ngDoCheck(): void {
    this.neemMappingOver();
  }

  private neemMappingOver() {
    if (this.connected) {
      this.mappedChar = this.mappings.get(this.inputChar);
    }
  }
}
