import { Course } from './types';

export const englishCourse: Course = {
  id: 'english-101',
  title: 'English Literature & Composition',
  description: 'Master literary analysis, critical writing, and classic literature',
  subject: 'English',
  level: 'High School',
  duration: '12 weeks',
  instructor: 'Prof. James Anderson',
  questions: [
    {
      id: 'eng-q1',
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1,
      explanation: 'William Shakespeare wrote this tragedy around 1594-1596'
    },
    {
      id: 'eng-q2',
      question: 'What is a metaphor?',
      options: ['Direct comparison using like or as', 'Implied comparison without using like or as', 'Exaggeration', 'Giving human qualities to non-human things'],
      correctAnswer: 1,
      explanation: 'A metaphor makes an implied comparison, unlike a simile which uses "like" or "as"'
    },
    {
      id: 'eng-q3',
      question: 'What is the main idea of a paragraph called?',
      options: ['Supporting detail', 'Topic sentence', 'Conclusion', 'Transition'],
      correctAnswer: 1,
      explanation: 'The topic sentence expresses the main idea of a paragraph'
    },
    {
      id: 'eng-q4',
      question: 'What is alliteration?',
      options: ['Repetition of vowel sounds', 'Repetition of consonant sounds at the beginning of words', 'Rhyming at the end of lines', 'Use of descriptive language'],
      correctAnswer: 1,
      explanation: 'Alliteration repeats initial consonant sounds, like "Peter Piper picked"'
    },
    {
      id: 'eng-q5',
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck'],
      correctAnswer: 0,
      explanation: 'Harper Lee published "To Kill a Mockingbird" in 1960'
    },
    {
      id: 'eng-q6',
      question: 'What is a protagonist?',
      options: ['The villain', 'The main character', 'A supporting character', 'The narrator'],
      correctAnswer: 1,
      explanation: 'The protagonist is the leading character or hero of a story'
    },
    {
      id: 'eng-q7',
      question: 'What point of view uses "I" and "me"?',
      options: ['Third person', 'Second person', 'First person', 'Omniscient'],
      correctAnswer: 2,
      explanation: 'First person point of view uses first-person pronouns like "I" and "me"'
    },
    {
      id: 'eng-q8',
      question: 'What is personification?',
      options: ['Comparing two things', 'Giving human qualities to non-human things', 'Extreme exaggeration', 'Contradictory terms'],
      correctAnswer: 1,
      explanation: 'Personification attributes human characteristics to non-human things'
    },
    {
      id: 'eng-q9',
      question: 'What is the climax of a story?',
      options: ['Introduction', 'Rising action', 'Turning point or moment of greatest tension', 'Resolution'],
      correctAnswer: 2,
      explanation: 'The climax is the point of highest tension and the major turning point'
    },
    {
      id: 'eng-q10',
      question: 'Who wrote "1984"?',
      options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'Kurt Vonnegut'],
      correctAnswer: 1,
      explanation: 'George Orwell wrote the dystopian novel "1984" published in 1949'
    },
    {
      id: 'eng-q11',
      question: 'What is irony?',
      options: ['A funny story', 'When the opposite of what is expected happens', 'A type of rhyme', 'Descriptive language'],
      correctAnswer: 1,
      explanation: 'Irony occurs when there is a contrast between expectation and reality'
    },
    {
      id: 'eng-q12',
      question: 'What is a haiku?',
      options: ['A long narrative poem', 'A three-line poem with 5-7-5 syllables', 'A rhyming couplet', 'A free verse poem'],
      correctAnswer: 1,
      explanation: 'A haiku is a Japanese poem with 17 syllables in a 5-7-5 pattern'
    },
    {
      id: 'eng-q13',
      question: 'What is foreshadowing?',
      options: ['Looking back at past events', 'Hints about future events', 'Character development', 'Setting description'],
      correctAnswer: 1,
      explanation: 'Foreshadowing gives advance hints of what is to come later in the story'
    },
    {
      id: 'eng-q14',
      question: 'Who wrote "Pride and Prejudice"?',
      options: ['Emily Brontë', 'Charlotte Brontë', 'Jane Austen', 'Virginia Woolf'],
      correctAnswer: 2,
      explanation: 'Jane Austen published "Pride and Prejudice" in 1813'
    },
    {
      id: 'eng-q15',
      question: 'What is a thesis statement?',
      options: ['The conclusion', 'The main argument or claim', 'A supporting detail', 'An introduction hook'],
      correctAnswer: 1,
      explanation: 'A thesis statement presents the main argument or central claim of an essay'
    },
    {
      id: 'eng-q16',
      question: 'What is onomatopoeia?',
      options: ['Repetition of sounds', 'Words that imitate sounds', 'Rhyming words', 'Silent letters'],
      correctAnswer: 1,
      explanation: 'Onomatopoeia are words that phonetically imitate sounds, like "buzz" or "splash"'
    },
    {
      id: 'eng-q17',
      question: 'What is the antagonist?',
      options: ['The hero', 'The narrator', 'The force opposing the protagonist', 'The setting'],
      correctAnswer: 2,
      explanation: 'The antagonist opposes or conflicts with the protagonist'
    },
    {
      id: 'eng-q18',
      question: 'What is a sonnet?',
      options: ['A short story', 'A 14-line poem', 'A play', 'A novel'],
      correctAnswer: 1,
      explanation: 'A sonnet is a 14-line poem, often written in iambic pentameter'
    },
    {
      id: 'eng-q19',
      question: 'Who wrote "The Great Gatsby"?',
      options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'William Faulkner', 'Tennessee Williams'],
      correctAnswer: 1,
      explanation: 'F. Scott Fitzgerald published "The Great Gatsby" in 1925'
    },
    {
      id: 'eng-q20',
      question: 'What is theme in literature?',
      options: ['The plot', 'The setting', 'The central message or underlying meaning', 'The characters'],
      correctAnswer: 2,
      explanation: 'Theme is the central topic, subject, or message within a narrative'
    }
  ]
};
