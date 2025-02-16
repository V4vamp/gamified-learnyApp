export const questions = [
  {
    id: 1,
    text: "What do plants need for Photosynthesis?",
    options: [
      "Oxygen & Sugar",
      "Sunlight, Water & Carbondioxide",
      "Protein & Soil",
    ],
    correct: "Sunlight, Water & Carbondioxide",
    error: "Think about the process of photosynthesis.",
    success:
      "Correct! Photosynthesis is the process by which plants make their food.",
  },
  {
    id: 2,
    text: "What is the capital of France?",
    options: ["Madrid", "Paris", "Berlin"],
    correct: "Paris",
    error: "Where is the Eiffel Tower located.",
    success: "Correct! Paris is the capital of France.",
  },
  {
    id: 3,
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter"],
    correct: "Mars",
    error: "What planet is similar to Earth?",
    success: "Correct! Mars is known as the Red Planet.",
  },

  {
    id: 4,
    text: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific"],
    correct: "Pacific",
    error: "Think about the size of the oceans.",
    success: "Correct! The Pacific Ocean is the largest ocean on Earth.",
  },
  {
    id: 5,
    text: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Gold"],
    correct: "Oxygen",
    error: "What element do we breathe?",
    success: "Correct! Oxygen is the element with the chemical symbol 'O'.",
  },
];

export const previewQuestions = [
  {
    id: 1,
    topic: "Match these English terms",
    question:
      "Drag and match the definitions below with their correct terms above",
    terms: ["Noun", "Pronoun", "Verb", "Adjectives", "Adverb"],
    definations: {
      "Noun":"A name of person, animal place or things",
      "Adverb":"A word that describes a verb",
      "Pronoun":"A word use instead of a noun",
      "Verb":"An action word",
      "Adjectives":"A word that describes a noun",
    },
  },
  {
    id: 2,
    topic: "Match these JavaScript terms",
    question:
      "Drag and match the definitions below with their correct terms above",
    terms: ["Variable", "Function", "Object", "Array", "String"],
    definations: {
      "Object":"A collection of related data",
      "Variable":"A named storage for data",
      "Function":"A block of code that performs a task",
      "String":"A sequence of characters",
      "Array":"A special type of object",
    },
  },
  {
    id: 3,
    topic: "Match these Algebric terms",
    question:
      "Drag and match the definitions below with their correct terms above",
    terms: ["Equation", "Expression", "Variable", "Constant", "Coefficient"],
    definations: {
      "Variable":"A symbol that represents a value",
      "Expression":"A mathematical phrase that combines numbers and/or variables using mathematical operations",
      "Equation":"A mathematical sentence that shows that two expressions are equal",
      "Constant":"A number that does not change",
      "Coefficient":"A number used to multiply a variable",
    },
  },
  {
    id: 4,
    topic: "Match these Figures of Speech to their meanings",
    question:
      "Drag and match the meanings below with their correct terms above",
    terms: ["Simile", "Metaphor", "Personification", "Hyperbole", "Irony"],
    definations: {
      "Simile":"A figure of speech that compares two unlike things using 'like' or 'as'",
      "Metaphor":"A figure of speech that compares two unlike things without using 'like' or 'as'",
      "Personification":"A figure of speech that gives human qualities to non-human things",
      "Hyperbole":"A figure of speech that exaggerates for emphasis",
      "Irony":"A figure of speech that uses words to convey a meaning that is opposite of its literal meaning",
    },
  },
  {
    id: 5,
    topic: "Match these Array methods",
    question:
      "Drag and match the definitions below with their correct terms above",
    terms: ["reduce()", "map()", "filter()", "sort()", "find()"],
    definations: {
      "map()":"creates a new array with all elements that pass the test implemented by the provided function",
      "find()":"creates a new array populated with the results of calling a provided function on every element in the calling array",
      "filter()":"returns the first element in the array that satisfies the provided testing function",
      "sort()":"sorts the elements of an array in place and returns the sorted array",
      "reduce()":"applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single",
    },
  },
];
