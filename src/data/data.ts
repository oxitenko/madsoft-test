export type questionType = 'one' | 'multiple' | 'freeShort' | 'freeLong';
export type testType = 'timerOn' | 'timerOff';

export interface Question {
  id: number;
  type: questionType;
  question: string;
  answers: string[];
  rightAnswers: string[];
}

export interface Answers {
  id: number;
  answers?: string[];
  rightAnswers?: string[];
}

export const tests: Question[] = [
  {
    id: 1,
    type: 'one',
    question: 'Who composed the "Moonlight Sonata"?',
    answers: [
      'Ludwig van Beethoven',
      'Johann Sebastian Bach',
      'Wolfgang Amadeus Mozart',
      'Hildegard von Bingen',
    ],
    rightAnswers: ['Ludwig van Beethoven'],
  },
  {
    id: 2,
    type: 'multiple',
    question: 'Who wrote the novel "1984"?',
    answers: [
      'George Orwell',
      'F. Scott Fitzgerald',
      'J.K. Rowling',
      'Ernest Hemingway',
    ],
    rightAnswers: ['George Orwell', 'F. Scott Fitzgerald'],
  },
  {
    id: 3,
    type: 'one',
    question: 'What is the capital city of Australia?',
    answers: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
    rightAnswers: ['Canberra'],
  },
  {
    id: 4,
    type: 'freeShort',
    question: 'What is the chemical symbol for Gold?',
    answers: [],
    rightAnswers: ['Au'],
  },
  {
    id: 5,
    type: 'multiple',
    question: 'In what year was the first iPhone released?',
    answers: ['2005', '2007', '2006', '2008'],
    rightAnswers: ['2007', '2006'],
  },
  {
    id: 6,
    type: 'freeLong',
    question: 'Who painted the "Mona Lisa"?',
    answers: [],
    rightAnswers: [
      'Leonardo da Vinci Leonardo da Vinci Leonardo da Vinci Leonardo da Vinci Leonardo da Vinci Leonardo da Vinci',
    ],
  },
  {
    id: 7,
    type: 'one',
    question: 'Which planet is known as the "Red Planet"?',
    answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    rightAnswers: ['Mars'],
  },
  {
    id: 8,
    type: 'multiple',
    question: 'Who discovered electricity?',
    answers: [
      'Isaac Newton',
      'Nikola Tesla',
      'Michael Faraday',
      'Benjamin Franklin',
    ],
    rightAnswers: ['Benjamin Franklin', 'Michael Faraday'],
  },
  {
    id: 9,
    type: 'freeShort',
    question: 'How many players are there in a soccer team?',
    answers: [],
    rightAnswers: ['11'],
  },
  {
    id: 10,
    type: 'freeLong',
    question: 'Who came up with the theory of relativity?',
    answers: [],
    rightAnswers: [
      'Albert Einstein Albert Einstein Albert Einstein Albert Einstein Albert Einstein Albert Einstein Albert Einstein Albert Einstein',
    ],
  },
];
