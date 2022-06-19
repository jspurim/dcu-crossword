import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PuzzleWordComponent } from '../puzzle-word/puzzle-word.component';
import { PuzzleData, PuzzleWord } from './puzzle.model';

@Component({
  selector: 'puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  puzzleData : PuzzleData;
  centralColumn: number;
  showHints : boolean = true;
  highContrast : boolean = false;

  @ViewChildren("wordCmp") wordComponents : QueryList<PuzzleWordComponent> = new QueryList();

  constructor() { 
    this.puzzleData = {
        puzzleWords: [{
          word: "dosmiltrece", centralLetter: 3, hint: "Año de la inundación.",
        },{
          word: "bruera", centralLetter: 5, hint: "Intendente de La Plata durante la inundación.",
        },{
          word: "scioli", centralLetter: 4, hint: "Gobernador de la Provincia de Buenos Aires durante la inundación.",
        },{
          word: "hidraulica", centralLetter:2, hint: "Departamento de la Faculta de Ingenieria que analiza los ríos y arroyos.",
        },{
          word: "tormenta", centralLetter: 1, hint: "Causal inicial de la inundación, efecto natural.",
        },{
          word: "kirchner", centralLetter: 5, hint: "Presidente de la Argentina durante la inundación.",
        },{
          word: "abril", centralLetter: 2, hint: "Mes de la inundación",
        },{
          word: "dosmildocientos", centralLetter: 6, hint: "Numero de personas que debieron ser evacuadas.",
        },{
          word: "arroyo", centralLetter: 5, hint: "Tipo de cuerpo de agua que recibe el nombre Maldonado.",
        },
      ]
    }
    this.centralColumn = Math.max(
      ...this.puzzleData.puzzleWords.map(w => w.centralLetter));
     
  }

  ngOnInit(): void {
  }

  computePadding(word : PuzzleWord): number {
    return this.centralColumn-word.centralLetter;
  }

  toggleHints() : void{
    this.showHints = !this.showHints;
  }

  toggleContrast() : void{
    this.highContrast = !this.highContrast;
  }

  resetPuzzle() : void {
    this.wordComponents.forEach(c => c.resetWord());
  }

}
