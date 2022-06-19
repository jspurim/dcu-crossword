import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'puzzle-word',
  templateUrl: './puzzle-word.component.html',
  styleUrls: ['./puzzle-word.component.css']
})
export class PuzzleWordComponent implements OnInit {

  @Input() word : string = '';
  @Input() centralLetter: number = 0;
  @Input() paddingSlots: number = 0;
  @Input() pos : number = 0;
  @Input() highContrast : boolean = false;

  @ViewChildren("letter") letterInputs : QueryList<ElementRef> = new QueryList();

  constructor() { }

  ngOnInit(): void {
  }

  resetWord():void {
    this.letterInputs.forEach(i => i.nativeElement.value = "")
  }

}
