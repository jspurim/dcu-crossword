import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuzzleWordComponent } from '../puzzle-word/puzzle-word.component';
import { PUZZLES } from './puzzle-data';
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
  solvedWords : Array<boolean> = []

  @ViewChildren("wordCmp") wordComponents : QueryList<PuzzleWordComponent> = new QueryList();

  constructor(private route: ActivatedRoute) { 
    this.puzzleData = PUZZLES.get("easy")!;
    this.centralColumn=0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.puzzleData = PUZZLES.get(params["puzzleId"])!;
      this.solvedWords = Array(this.puzzleData.puzzleWords.length).fill(false);
      this.centralColumn = Math.max(
        ...this.puzzleData.puzzleWords.map(w => w.centralLetter));
    })
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
    this.wordComponents.forEach(w => w.resetWord());
  }

  validatePuzzle() : void {
    this.wordComponents.forEach(w => w.showValidation = true);
    this.solvedWords = this.wordComponents.toArray().map(w => w.isCorrect());
    if(this.solvedWords.every(x=>x)){
      console.log("YEY!")
    }
  }

  clearValidation() : void {
    this.wordComponents.forEach(w => w.showValidation = false);
  }
}
