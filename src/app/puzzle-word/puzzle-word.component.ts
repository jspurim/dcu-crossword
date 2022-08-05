import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'puzzle-word',
  templateUrl: './puzzle-word.component.html',
  styleUrls: ['./puzzle-word.component.css']
})
export class PuzzleWordComponent implements OnInit {

  @Input() word : string = '';
  @Input() hint : string = '';
  @Input() centralLetter: number = 0;
  @Input() paddingSlots: number = 0;
  @Input() pos : number = 0;
  @Input() highContrast : boolean = false;
  @Output() wordChange = new EventEmitter();
  showValidation : boolean = false;

  @ViewChildren("letter") letterInputs : QueryList<ElementRef> = new QueryList();

  constructor() { }

  ngOnInit(): void {
  }

  resetWord():void {
    this.letterInputs.forEach(i => i.nativeElement.value = "")
  }

  currentWord(): string {
    return this.letterInputs.map(i => i.nativeElement.value).join("");
  }

  isCorrect() : boolean {
    return this.word.toLowerCase() == this.currentWord().toLowerCase();
  }

  emitChangeEvent(){
    this.wordChange.emit();
  }

  buildAriaLabel(letterPosition : number, centralLetter : boolean) : string {
    let wordLabel = `palabra número ${this.pos +1}.`
    let firstLetterLabel = `${ this.word.length } letras: ${this.hint}.`
    let letterLabel = `letra ${ letterPosition+1 } de ${ this.word.length }.`
    if(centralLetter)
      letterLabel += "letra destacada."
    if(letterPosition==0){
      return `${wordLabel} ${firstLetterLabel} ${letterLabel}`
    }
    return `${letterLabel}${wordLabel}`
  }

}
