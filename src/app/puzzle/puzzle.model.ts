export interface PuzzleData {
    puzzleWords: Array<PuzzleWord>
};

export interface PuzzleWord {
    word: string;
    centralLetter: number;
    hint: string;
}