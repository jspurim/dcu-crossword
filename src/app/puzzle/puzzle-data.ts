import { PuzzleData } from "./puzzle.model";

export const PUZZLES : Map<String, PuzzleData> = new Map(Object.entries({
    "easy": {
      puzzleWords: [{
        word: "dosmiltrece", centralLetter: 3, hint: "Año de la inundación.",
      },{
        word: "bruera", centralLetter: 5, hint: "Intendente de La Plata durante la inundación.",
      },{
        word: "scioli", centralLetter: 4, hint: "Gobernador de la Provincia de Buenos Aires durante la inundación.",
      },
    ]
  },
  "intermediate": {
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
        word: "abril", centralLetter: 0, hint: "Mes de la inundación",
      },
    ]
  },
  "hard": {
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
        word: "abril", centralLetter: 0, hint: "Mes de la inundación",
      },{
        word: "dosmildocientos", centralLetter: 6, hint: "Numero de personas que debieron ser evacuadas.",
      },{
        word: "arroyo", centralLetter: 5, hint: "Tipo de cuerpo de agua que recibe el nombre Maldonado.",
      },
    ]
  }
}));