Colour Palette: https://coolors.co/f72585-7209b7-3a0ca3-4361ee-4cc9f0
Website: https://manakouri.github.io/spelling-skills-challenge/

Potential code for spelling check for sentences after 'check code and capitalisation'

// Spell Check
const COMMON_WORDS = [
  "the", "I", "a", "an", "is", "are", "was", "were", "to", "in", "on", "at", "by", "with", "and", "or", "but", "if", "it",
  "of", "for", "from", "as", "has", "have", "had", "he", "she", "they", "we", "you", "his", "her", "their", "our", "your",
  "do", "does", "did", "not", "be", "can", "will", "would", "should", "could", "this", "that", "these", "those", "my", "me",
  "so", "no", "yes", "up", "down", "out", "about", "just", "now", "then", "there", "here", "how", "who", "what", "when", "where", "why"
  // Add more as needed
];
const stageWords = new Set(spellingData[currentStage].flatMap(p => getWordsList(p).map(w => w.toLowerCase())));
const commonWordsSet = new Set(COMMON_WORDS.map(w => w.toLowerCase()));
const userWords = text.toLowerCase().match(/\b(\w+)\b/g) || [];
const misspelledWords = userWords.filter(word => !stageWords.has(word) && !commonWordsSet.has(word));

if (misspelledWords.length > 0) {
    feedback.innerHTML = `Good sentences! I found a few spelling errors. Please check these words: <br> <strong class="text-red-500">${[...new Set(misspelledWords)].join(', ')}</strong>`;
    return;
}
