 const spellingData = {
            3: [
                { title: "Short Vowel 'a'", pattern: "a", rule: "The short 'a' sound as in 'cat'.", words: ["cat", "map", "fan", "sad", "bag", "apple", "ant", "catch", "magic", "fantastic"] },
                { title: "Short Vowel 'e'", pattern: "e", rule: "The short 'e' sound as in 'bed'.", words: ["bed", "ten", "red", "leg", "pen", "tent", "best", "seven", "letter", "empty"] },
                { title: "Short Vowel 'i'", pattern: "i", rule: "The short 'i' sound as in 'sit'.", words: ["bit", "sit", "pin", "rim", "win", "lid", "hip", "tin", "dig", "inside", "invite", "insect", "simple", "sister", "finish", "limit", "minute", "village"] },
                { title: "Short Vowel 'o'", pattern: "o", rule: "The short 'o' sound as in 'hot'.", words: ["hot", "dog", "log", "mop", "pot", "clock", "shop", "orange", "bottle", "common"] },
                { title: "Short Vowel 'u'", pattern: "u", rule: "The short 'u' sound as in 'cup'.", words: ["cup", "mug", "run", "sun", "cut", "hug", "mud", "luck", "pup", "supper", "under", "bucket", "puppet", "sunset", "butter", "muffin", "subject", "button"] },
                { title: "Digraph 'sh'", pattern: "sh", rule: "Two letters that make one sound, 'sh' as in 'ship'.", words: ["ship", "shop", "fish", "she", "shut", "crash", "fresh", "shadow", "finish"] },
                { title: "Digraph 'ch'", pattern: "ch", rule: "Two letters that make one sound, 'ch' as in 'chin'.", words: ["chin", "chop", "much", "rich", "chick", "lunch", "teacher", "kitchen"] },
                { title: "Digraph 'th'", pattern: "th", rule: "Two letters that make one sound, 'th' as in 'this' or 'thumb'.", words: ["this", "that", "the", "then", "with", "bath", "three", "thank", "brother"] },
                { title: "Digraph 'wh'", pattern: "wh", rule: "Two letters that make one sound, 'wh' as in 'wheel'.", words: ["what", "when", "why", "wheel", "whip", "white", "whale", "whistle"] },
                { title: "Digraph 'ph'", pattern: "ph", rule: "Two letters that make the 'f' sound, as in 'phone'.", words: ["phone", "photo", "dolphin", "alphabet", "graph", "nephew", "phantom"] },
                { title: "Digraph '-ck'", pattern: "ck", rule: "Used at the end of a syllable, after a short vowel to make the 'k' sound.", words: ["duck", "sock", "kick", "black", "clock", "chick", "rocket", "pocket", "jacket"] },
                { title: "The '-dge' Pattern", pattern: "dge", rule: "Used at the end of a syllable, after a short vowel to make the 'j' sound.", words: ["badge", "edge", "bridge", "fudge", "judge", "ledge", "dodge", "nudge", "wedge", "knowledge", "prejudge", "misjudge", "fridge", "dislodge"] },
                { title: "The '-tch' Pattern", pattern: "tch", rule: "Used at the end of a syllable, after a short vowel to make the 'ch' sound.", words: ["catch", "match", "witch", "pitch", "hatch", "scratch", "fetch", "unlatch", "dispatch", "rewatch", "rematch", "sketchbook", "mismatch", "crosshatch", "sketch"] },
                { title: "The Floss Rule", pattern: "ff/ll/ss/zz", rule: "Double 'f', 'l', 's', and 'z' after a short vowel at the end of a one-syllable word.", words: ["puff", "hill", "mess", "buzz", "fluff", "spell", "kiss", "fizz", "staff", "will", "glass"] },
                { title: "The 'ai' Pattern", pattern: "ai", rule: "Makes a long 'a' sound. Usually found at the beginning or in the middle of a syllable.", words: ["rain", "train", "paid", "wait", "paint", "brain", "afraid", "explain"] },
                { title: "The 'ay' Pattern", pattern: "ay", rule: "Makes a long 'a' sound. Usually found at the end of a syllable.", words: ["day", "play", "may", "say", "way", "stay", "today", "always", "Sunday"] },
                { title: "The 'ou' Pattern", pattern: "ou", rule: "Makes the 'ow' sound as in 'shout'.", words: ["out", "shout", "cloud", "scout", "found", "mouth", "couch", "around", "about", "without", "surround", "announce", "encounter", "amount"] },
                { title: "Magic 'a_e'", pattern: "a_e", rule: "The 'e' at the end makes the 'a' say its name (long 'a' sound).", words: ["cake", "make", "same", "game", "late", "snake", "mistake", "escape"] },
                { title: "Magic 'i_e'", pattern: "i_e", rule: "The 'e' at the end makes the 'i' say its name (long 'i' sound).", words: ["bike", "like", "time", "nine", "five", "slide", "inside", "invite"] },
                { title: "Magic 'o_e'", pattern: "o_e", rule: "The 'e' at the end makes the 'o' say its name (long 'o' sound).", words: ["home", "bone", "rope", "note", "spoke", "alone", "explode"] },
                { title: "Magic 'u_e'", pattern: "u_e", rule: "The 'e' at the end makes the 'u' say its name (long 'u' sound).", words: ["cube", "huge", "June", "flute", "rude", "excuse", "use"] },
                { title: "Magic 'e_e'", pattern: "e_e", rule: "The 'e' at the end makes the first 'e' say its name (long 'e' sound).", words: ["these", "theme", "complete", "athlete", "concrete"] },
                { title: "Contractions (am/is/are)", pattern: "'", rule: "Join two words. Remove the first vowel from the second word and replace it with an apostrophe.", words: ["I'm", "he's", "what's", "when's", "we're", "they're"], examples: [{base: "I am", contraction: "I'm"}, {base: "he is", contraction: "he's"}, {base: "what is", contraction: "what's"}, {base: "when is", contraction: "when's"}, {base: "we are", contraction: "we're"}, {base: "they are", contraction: "they're"}] },
                { title: "Past Tense '-ed'", pattern: "ed", rule: "Added to verbs to show something happened in the past. Can make a 'd', 't', or 'id' sound.", words: ["looked", "jumped", "watched", "laughed", "dropped", "missed", "called", "played", "cleaned", "lived", "opened", "loved", "wanted", "needed", "folded"] },
                { title: "CVC Doubling", pattern: "doubling", rule: "Double the final consonant when adding a vowel suffix (like -ing, -er, -ed) to a short CVC (consonant-vowel-consonant) word.", words: [{full: "shopping", base: "shop", suffix: "ing"}, {full: "robber", base: "rob", suffix: "er"}, {full: "mopped", base: "mop", suffix: "ed"}, {full: "tripping", base: "trip", suffix: "ing"}, {full: "stepped", base: "step", suffix: "ed"}, {full: "fitting", base: "fit", suffix: "ing"}, {full: "wetter", base: "wet", suffix: "er"}] }
            ],
            4: [
                { title: "The 'oi' Pattern", pattern: "oi", rule: "Makes the 'oy' sound. Usually found at the beginning or in the middle of a syllable.", words: ["oil", "boil", "coin", "soil", "foil", "coil", "join", "boiling", "appoint", "rejoice", "disjointed", "ointment", "spoiler", "turmoil"] },
                { title: "The 'oy' Pattern", pattern: "oy", rule: "Makes the 'oy' sound. Usually found at the end of a syllable.", words: ["boy", "toy", "joy", "soy", "coy", "ploy", "cloy", "enjoy", "destroy", "annoy", "employee", "royalty", "voyage"] },
                { title: "The 'oa' Pattern", pattern: "oa", rule: "Makes a long 'o' sound. Usually found at the beginning or in the middle of a syllable.", words: ["boat", "coat", "goat", "moan", "load", "groan", "toad", "boating", "floating", "coating", "approach", "soapbox", "roadway"] },
                { title: "The 'ow' (o) Pattern", pattern: "ow", rule: "Makes a long 'o' sound, like in 'snow'. Usually found at the end of a syllable.", words: ["snow", "grow", "low", "tow", "row", "show", "blow", "window", "yellow", "shallow", "elbow", "pillow", "shadow", "hollow"] },
                { title: "The 'ow' (ou) Pattern", pattern: "ow", rule: "Makes the 'ow' sound, like in 'cow'.", words: ["cow", "now", "how", "brown", "town", "clown", "power", "flower", "towel"] },
                { title: "The 'ar' Pattern", pattern: "ar", rule: "An r-controlled vowel that makes the 'ar' sound as in 'car'.", words: ["car", "star", "far", "dark", "park", "shark", "smart", "party", "artist", "garden", "market"] },
                { title: "The 'er'/'ur'/'ir' Pattern", pattern: "er/ur/ir", rule: "An r-controlled vowel. All three spellings can make the same 'er' sound.", words: ["her", "term", "hammer", "summer", "teacher", "fur", "turn", "nurse", "purple", "further", "bird", "stir", "thirty", "shirt", "skirt"] },
                { title: "The 'or' Pattern", pattern: "or", rule: "An r-controlled vowel that makes the 'or' sound.", words: ["fork", "storm", "corn", "port", "short", "sport", "born", "corner", "morning", "important", "report", "explore", "forget", "portion"] },
                { title: "The 'c'/'k' Rule", pattern: "c/k", rule: "'k' often comes before 'i' and 'e'. 'c' often comes before the other vowels ('a', 'o', 'u').", words: ["cat", "cup", "cold", "coat", "can", "carrot", "candle", "kite", "kick", "kitten", "key", "king", "kept", "kind"] },
                { title: "Suffix '-er'", pattern: "er", rule: "A suffix that means 'more' (comparative) or 'a person who does something'.", words: ["faster", "taller", "stronger", "quicker", "teacher", "baker", "farmer", "player", "leader"] },
                { title: "Suffix '-ly'", pattern: "ly", rule: "A suffix that turns an adjective into an adverb, meaning 'how' something is done.", words: ["slowly", "quickly", "loudly", "softly", "happily", "sadly", "bravely", "kindly", "neatly"] },
                { title: "Contractions (has/will/not)", pattern: "'", rule: "Join two words. Remove some letters and replace them with an apostrophe.", words: ["he's", "he'll", "I'll", "wasn't", "can't", "won't"], examples: [{base: "he has", contraction: "he's"}, {base: "he will", contraction: "he'll"}, {base: "I will", contraction: "I'll"}, {base: "was not", contraction: "wasn't"}, {base: "can not", contraction: "can't"}, {base: "will not", contraction: "won't"}] }
            ],
            5: [
                { title: "The 'ew' Pattern", pattern: "ew", rule: "Makes a long 'oo' sound, like in 'flew'.", words: ["new", "few", "blew", "crew", "stew", "chew", "grew", "review", "interview", "preview", "renewal", "curfew", "overview"] },
                { title: "The 'ue' Pattern", pattern: "ue", rule: "Makes a long 'oo' sound, like in 'blue'.", words: ["blue", "glue", "true", "queue", "due", "hue", "flue", "rescue", "continue", "argue", "avenue", "statue", "issue"] },
                { title: "The 'y' (long i) Pattern", pattern: "y", rule: "Makes a long 'i' sound at the end of a one-syllable word.", words: ["try", "shy", "cry", "fly", "spy", "spry", "by", "dry", "ply", "my", "why"] },
                { title: "The 'y' (long e) Pattern", pattern: "y", rule: "Makes a long 'e' sound at the end of a multi-syllable word.", words: ["happy", "funny", "sunny", "silly", "grumpy", "windy", "puppy", "candy", "family", "body", "lady", "empty", "ready", "hungry"] },
                { title: "The 'ey' (long e) Pattern", pattern: "ey", rule: "Makes a long 'e' sound at the end of a word.", words: ["key", "money", "turkey", "valley", "donkey", "journey", "alley", "chimney", "monkey", "honey", "parsley", "trolley", "alleyway", "attorney"] },
                { title: "The '-le' Pattern", pattern: "le", rule: "Often found at the end of a two-syllable word after a consonant.", words: ["apple", "candle", "table", "bubble", "simple", "jungle", "giggle", "tickle", "cradle", "puzzle", "bottle", "rattle", "uncle", "beetle"] },
                { title: "The soft 'c' (s) Pattern", pattern: "c", rule: "When 'c' is followed by an 'e', 'i', or 'y', it usually makes the soft 's' sound.", words: ["cell", "cent", "ice", "race", "face", "lace", "mice", "city", "pencil", "circus", "cycle", "centre", "recent", "decide"] },
                { title: "Suffix '-est'", pattern: "est", rule: "A suffix meaning 'the most'. Used for comparing three or more things.", words: ["fastest", "happiest", "strongest", "biggest", "tallest", "smallest", "darkest"] },
                { title: "Suffix '-ful'", pattern: "ful", rule: "A suffix meaning 'full of'.", words: ["helpful", "careful", "beautiful", "wonderful", "powerful", "painful", "joyful"] },
                { title: "Contractions (have/would)", pattern: "'", rule: "Join two words, removing letters and adding an apostrophe.", words: ["we've", "I've", "should've", "we'd", "I'd", "they'd"], examples: [{base: "we have", contraction: "we've"}, {base: "I have", contraction: "I've"}, {base: "should have", contraction: "should've"}, {base: "we would", contraction: "we'd"}, {base: "I would", contraction: "I'd"}, {base: "they would", contraction: "they'd"}] }
            ],
            6: [
                { title: "Silent 'kn'", pattern: "kn", rule: "A silent letter pattern where the 'k' is silent, making the 'n' sound.", words: ["know", "knife", "knight", "knee", "knock", "knot"] },
                { title: "Silent 'wr'", pattern: "wr", rule: "A silent letter pattern where the 'w' is silent, making the 'r' sound.", words: ["write", "wrong", "wrap", "wreck", "wrist", "wrestle"] },
                { title: "Silent 'mb'", pattern: "mb", rule: "A silent letter pattern where the 'b' is silent at the end of a word.", words: ["lamb", "comb", "thumb", "climb", "bomb", "crumb"] },
                { title: "Silent 'sc'", pattern: "sc", rule: "Makes the 's' sound, where the 'c' is silent.", words: ["science", "scene", "scent", "scissors", "descend", "fascinate"] },
                { title: "The 'ie' (long e) Pattern", pattern: "ie", rule: "Makes a long 'e' sound, as in 'chief'. Remember: 'i' before 'e' except after 'c'.", words: ["chief", "thief", "brief", "grief", "relief", "belief", "field", "shield", "piece", "niece", "priest", "achieve", "retrieve"] },
                { title: "The 'eigh'/'aigh' (long a) Pattern", pattern: "eigh/aigh", rule: "These patterns can all make a long 'a' sound.", words: ["eight", "weight", "freight", "neighbour", "sleigh", "eighty", "straight", "straighten"] },
                { title: "The 'air'/'are' Pattern", pattern: "air/are", rule: "R-controlled vowels that make the 'air' sound.", words: ["air", "fair", "hair", "pair", "chair", "stair", "lair", "airplane", "haircut", "bare", "care", "fare", "share", "stare", "scarecrow"] },
                { title: "The 'ough' (o) Pattern", pattern: "ough", rule: "A complex pattern that can make a long 'o' sound.", words: ["though", "although", "dough", "thorough"] },
                { title: "Suffix '-cian'", pattern: "cian", rule: "A suffix that makes the 'shun' sound and means a person with a special skill.", words: ["musician", "magician", "technician", "electrician", "politician", "beautician"] },
                { title: "Suffix '-tion'", pattern: "tion", rule: "A suffix that makes the 'shun' sound.", words: ["action", "nation", "station", "lotion", "motion", "option", "education", "information"] },
                { title: "Suffix '-sion'", pattern: "sion", rule: "A suffix that can make a 'shun' or 'zhun' sound.", words: ["vision", "television", "conclusion", "decision", "explosion", "mission"] },
                { title: "Suffix '-ment'", pattern: "ment", rule: "A suffix that forms nouns from verbs, meaning the result of an action.", words: ["payment", "movement", "agreement", "excitement", "government", "statement"] },
                { title: "Suffix '-logy'", pattern: "logy", rule: "A suffix meaning 'the study of'.", words: ["biology", "geology", "technology", "psychology", "mythology"] },
                { title: "Suffix '-ism'", pattern: "ism", rule: "A suffix that forms nouns, meaning a practice, system, or philosophy.", words: ["tourism", "criticism", "optimism", "capitalism", "socialism"] },
                { title: "Prefix 'mis-'", pattern: "mis", rule: "A prefix meaning 'wrong' or 'bad'.", words: ["misbehave", "mistake", "misunderstand", "misspell", "misplace"] },
                { title: "Prefix 'dec-'", pattern: "dec", rule: "A prefix meaning 'ten'.", words: ["decade", "decimal", "decagon", "decathlon"] },
                { title: "Prefix 'bi-'", pattern: "bi", rule: "A prefix meaning 'two'.", words: ["bicycle", "bilingual", "biannual", "bicep", "binoculars"] },
                { title: "Prefix 'semi-'", pattern: "semi", rule: "A prefix meaning 'half'.", words: ["semicircle", "semifinal", "semicolon", "semiconscious"] },
                { title: "Plural '-es'", pattern: "es", rule: "Add '-es' to make words plural that end in s, x, z, ch, or sh.", words: ["foxes", "buses", "matches", "kisses", "quizzes", "atlases", "cries"], baseWords: ["fox", "bus", "match", "kiss", "quiz", "atlas", "cry"] },
                { title: "Plural '-ves'", pattern: "ves", rule: "For most nouns ending in 'f' or 'fe', change the f/fe to 'v' and add '-es'.", words: ["leaves", "wolves", "lives", "thieves", "knives", "elves", "shelves"], baseWords: ["leaf", "wolf", "life", "thief", "knife", "elf", "shelf"] }
            ]
        };

        let currentStage = null;
        let currentPatternData = null;
        let challengeState = {
            timerId: null,
            timeLeft: 120,
            score: 0,
            allStagePatterns: [],
            missedPatterns: [],
            currentCorrectAnswer: '',
            currentPatternTitle: ''
        };

        // --- Navigation ---
        const mainMenuScreen = document.getElementById('main-menu-screen');
        const stageMenuScreen = document.getElementById('stage-menu-screen');
        const activityScreen = document.getElementById('activity-screen');
        const challengeScreen = document.getElementById('challenge-screen');
        const activitySteps = document.querySelectorAll('.activity-step');
        
        function showScreen(screen) {
            mainMenuScreen.classList.add('hidden');
            stageMenuScreen.classList.add('hidden');
            activityScreen.classList.add('hidden');
            challengeScreen.classList.add('hidden');
            screen.classList.remove('hidden');
        }

        function showMainMenu() {
            currentStage = null;
            currentPatternData = null;
            showScreen(mainMenuScreen);
        }

        function showStageMenu(stage) {
            currentStage = stage;
            showScreen(stageMenuScreen);
            document.getElementById('stage-title').textContent = `Stage ${stage}`;
            const container = document.getElementById('pattern-buttons-container');
            container.innerHTML = '';
            spellingData[stage].forEach((pattern, index) => {
                const button = document.createElement('button');
                button.className = "btn p-4 bg-gray-100 text-gray-800 font-semibold rounded-lg text-lg";
                button.textContent = pattern.title;
                button.onclick = () => startActivity(stage, index);
                container.appendChild(button);
            });
            document.getElementById('timed-challenge-btn').onclick = () => showChallenge(stage);
        }
        
        function startActivity(stage, patternIndex) {
            currentPatternData = spellingData[stage][patternIndex];
            showScreen(activityScreen);
            document.getElementById('back-to-stage-menu').onclick = () => showStageMenu(stage);
            document.getElementById('activity-title').textContent = currentPatternData.title;
            nextActivityStep(1, true); 
        }

        function nextActivityStep(step, isFirstStep = false) {
             if (!isFirstStep) {
                document.getElementById(`activity-step-${step-1}`).classList.add('opacity-50');
             }
            activitySteps.forEach(s => s.classList.add('hidden'));
            const nextStepEl = document.getElementById(`activity-step-${step}`);
            if(nextStepEl) {
                nextStepEl.classList.remove('hidden');
                nextStepEl.classList.remove('opacity-50');
            }
            switch(step) {
                case 1: setupRuleIntro(); break;
                case 2: setupFillGaps(); break;
                case 3: setupWordFind(); break;
                case 4: setupSentenceWriting(); break;
            }
        }

        // --- Activity Setup Functions ---
        const getWordsList = (patternData) => patternData.words.map(word => typeof word === 'string' ? word : word.full);

        function setupRuleIntro() {
            document.getElementById('rule-text').textContent = currentPatternData.rule;
            const exampleContainer = document.getElementById('example-words');
            exampleContainer.innerHTML = '';
            let wordsToShow = currentPatternData.examples ? currentPatternData.examples.map(e => e.contraction) : getWordsList(currentPatternData);
            
            wordsToShow.slice(0, 10).forEach(word => {
                const p = document.createElement('p');
                let patternToHighlight = currentPatternData.pattern;
                if(patternToHighlight.includes('_')) {
                    patternToHighlight = patternToHighlight.replace(/_/g, '.');
                }
                
                let patternRegex;
                if (patternToHighlight.includes('/')) {
                    const patterns = patternToHighlight.split('/').join('|');
                    patternRegex = new RegExp(`(${patterns})`, 'gi');
                } else if (patternToHighlight === "'") {
                     patternRegex = /(')/g;
                } else {
                    patternRegex = new RegExp(`(${patternToHighlight})`, 'gi');
                }
                p.innerHTML = word.replace(patternRegex, `<span class="pattern-highlight">$1</span>`);
                exampleContainer.appendChild(p);
            });
        }
        
        let fillGapsWords = [], currentGapWord = {}, isSecondAttemptForThisWord = false;
        function setupFillGaps() {
             fillGapsWords = [...currentPatternData.words].sort(() => 0.5 - Math.random()).slice(0, 10);
             document.getElementById('fill-gaps-container').classList.remove('hidden');
             document.getElementById('fill-gaps-complete').classList.add('hidden');
             nextGappedWord();
        }
        
        function nextGappedWord() {
            isSecondAttemptForThisWord = false;
            const feedbackEl = document.getElementById('fill-gaps-feedback');
            feedbackEl.textContent = '';
            feedbackEl.className = "h-10 mt-2 text-center font-semibold";

            if (fillGapsWords.length === 0) {
                document.getElementById('fill-gaps-container').classList.add('hidden');
                document.getElementById('fill-gaps-complete').classList.remove('hidden');
                return;
            }
            
            const wordOrObject = fillGapsWords.pop();
            currentGapWord.rawItem = wordOrObject;
            let pattern = currentPatternData.pattern;
            
            if (pattern === 'doubling') {
                currentGapWord.correct = wordOrObject.full;
                currentGapWord.gapped = `${wordOrObject.base} + ${wordOrObject.suffix}`;
            } else {
                currentGapWord.correct = wordOrObject;
                let replacementPattern = pattern;

                if (pattern.includes('/')) {
                     const patterns = pattern.split('/');
                     replacementPattern = patterns.find(p => currentGapWord.correct.includes(p)) || patterns[0];
                }
                
                if (pattern.includes('_')) {
                    const parts = replacementPattern.split('_');
                    const wordArr = currentGapWord.correct.split('');
                    const firstIndex = currentGapWord.correct.indexOf(parts[0]);
                    const lastIndex = currentGapWord.correct.lastIndexOf(parts[1]);
                    if (firstIndex > -1) wordArr[firstIndex] = '_';
                    if (lastIndex > -1) wordArr[lastIndex] = '_';
                    currentGapWord.gapped = wordArr.join('');
                } else if (pattern === "'") {
                     let example = currentPatternData.examples.find(e => e.contraction === currentGapWord.correct);
                     currentGapWord.gapped = example ? example.base : currentGapWord.correct.replace(replacementPattern, "_".repeat(replacementPattern.length));
                }
                else {
                    currentGapWord.gapped = currentGapWord.correct.replace(replacementPattern, "_".repeat(replacementPattern.length));
                }
            }

            document.getElementById('gapped-word').textContent = currentGapWord.gapped;
            const inputEl = document.getElementById('gapped-word-input');
            inputEl.value = '';
            inputEl.focus();
        }
        
        function checkGappedWord() {
            const inputEl = document.getElementById('gapped-word-input');
            const feedbackEl = document.getElementById('fill-gaps-feedback');
            if (inputEl.value.trim().toLowerCase() === currentGapWord.correct.toLowerCase()) {
                isSecondAttemptForThisWord = false;
                feedbackEl.textContent = "Correct!";
                feedbackEl.classList.add("text-green-600");
                setTimeout(nextGappedWord, 1200);
            } else {
                if (!isSecondAttemptForThisWord) {
                    isSecondAttemptForThisWord = true;
                    feedbackEl.innerHTML = `Not quite. Read aloud: <strong class="text-[#7209B7]">${currentGapWord.correct}</strong>. Try again.`;
                    feedbackEl.classList.add("text-red-600");
                    inputEl.value = '';
                    inputEl.focus();
                } else {
                    isSecondAttemptForThisWord = false;
                    feedbackEl.innerHTML = `The correct spelling is: <strong class="text-[#7209B7]">${currentGapWord.correct}</strong>.`;
                    feedbackEl.classList.add("text-red-600");
                    setTimeout(nextGappedWord, 2500);
                }
            }
        }
        
        let wordFindState = {};
function setupWordFind() {
    let gridSize = window.innerWidth < 640 ? 7 : 10;
    let wordsToTry = getWordsList(currentPatternData)
        .map(w => w.toLowerCase())
        .filter(w => w.length <= gridSize);

    // Shuffle and pick up to 8 candidates to attempt to place
    wordsToTry = [...new Set(wordsToTry)].sort(() => 0.5 - Math.random()).slice(0, Math.min(8, wordsToTry.length));

    // Generate grid and get only successfully-placed words
    let placedWords = generateWordFindGrid(gridSize, wordsToTry);

    wordFindState = {
        gridSize: gridSize,
        grid: placedWords.grid,
        words: placedWords.words,
        foundWords: [],
        isSelecting: false,
        startCell: null,
        currentSelection: []
    };

    // Render only placed words in the list
    const listEl = document.getElementById('found-words-list');
    listEl.innerHTML = '';
    wordFindState.words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        li.id = `wordlist-${word}`;
        listEl.appendChild(li);
    });
    renderWordFindGrid();
    document.getElementById('word-find-complete').classList.add('hidden');
}

// Returns {grid, words: [placed words]}
function generateWordFindGrid(gridSize, wordsToTry) {
    let grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
    const directions = [
        [0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]
    ];
    let placedWords = [];
    wordsToTry.forEach(word => {
        let placed = false, attempts = 0;
        while (!placed && attempts < 200) {
            const dir = directions[Math.floor(Math.random() * directions.length)];
            const maxRow = dir[0] === 1 ? gridSize - word.length : dir[0] === -1 ? word.length - 1 : gridSize - 1;
            const maxCol = dir[1] === 1 ? gridSize - word.length : dir[1] === -1 ? word.length - 1 : gridSize - 1;
            const r = Math.floor(Math.random() * gridSize);
            const c = Math.floor(Math.random() * gridSize);
            // Only try if starting point keeps word in-bounds
            if (
                r >= 0 && r <= maxRow &&
                c >= 0 && c <= maxCol &&
                canPlaceWord(word, r, c, dir, grid, gridSize)
            ) {
                for (let i = 0; i < word.length; i++)
                    grid[r + i * dir[0]][c + i * dir[1]] = word[i];
                placed = true;
                placedWords.push(word);
            }
            attempts++;
        }
    });
    // Fill unused cells
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            if (!grid[r][c]) grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    }
    return {grid, words: placedWords};
}

function canPlaceWord(word, r, c, dir, grid, gridSize) {
    for (let i = 0; i < word.length; i++) {
        const newR = r + i * dir[0], newC = c + i * dir[1];
        if (
            newR < 0 || newR >= gridSize ||
            newC < 0 || newC >= gridSize
        ) return false;
        const cell = grid[newR][newC];
        if (cell && cell !== word[i]) return false;
    }
    return true;
}

// No change needed for renderWordFindGrid() and other logic

        function renderWordFindGrid() {
            const gridEl = document.getElementById('word-find-grid');
            gridEl.innerHTML = '';
            for (let r = 0; r < wordFindState.gridSize; r++) {
                for (let c = 0; c < wordFindState.gridSize; c++) {
                    const cell = document.createElement('div');
                    cell.className = 'grid-cell';
                    cell.textContent = wordFindState.grid[r][c];
                    cell.dataset.r = r;
                    cell.dataset.c = c;
                    gridEl.appendChild(cell);
                }
            }
        }
        
        function updateSelection(endCell) {
            wordFindState.currentSelection.forEach(cell => cell.classList.remove('selecting'));
            wordFindState.currentSelection = [];
            const startR = wordFindState.startCell.dataset.r * 1, startC = wordFindState.startCell.dataset.c * 1;
            const endR = endCell.dataset.r * 1, endC = endCell.dataset.c * 1;
            const dr = endR - startR, dc = endC - startC;
            if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return; 
            const stepR = Math.sign(dr), stepC = Math.sign(dc);
            const steps = Math.max(Math.abs(dr), Math.abs(dc));
            for(let i = 0; i <= steps; i++) {
                const r = startR + i * stepR, c = startC + i * stepC;
                const cell = document.querySelector(`.grid-cell[data-r='${r}'][data-c='${c}']`);
                if(cell) {
                   cell.classList.add('selecting');
                   wordFindState.currentSelection.push(cell);
                }
            }
        }
        
        function checkSelection() {
            let selectedWord = wordFindState.currentSelection.map(cell => cell.textContent).join('');
            let reversedWord = selectedWord.split('').reverse().join('');
            let wordFound = null;
            if (wordFindState.words.includes(selectedWord)) wordFound = selectedWord;
            else if (wordFindState.words.includes(reversedWord)) wordFound = reversedWord;

            if (wordFound && !wordFindState.foundWords.includes(wordFound)) {
                wordFindState.foundWords.push(wordFound);
                wordFindState.currentSelection.forEach(cell => {
                    cell.classList.remove('selecting'); cell.classList.add('found');
                });
                document.getElementById(`wordlist-${wordFound}`).classList.add('found');
            } else {
                 wordFindState.currentSelection.forEach(cell => cell.classList.remove('selecting'));
            }
            if (wordFindState.foundWords.length === wordFindState.words.length) {
                document.getElementById('word-find-complete').classList.remove('hidden');
            }
        }
        
        function setupSentenceWriting() {
            const reminderContainer = document.getElementById('sentence-words-reminder');
            reminderContainer.innerHTML = '';
            getWordsList(currentPatternData).slice(0, 8).forEach(word => {
                const span = document.createElement('span');
                span.textContent = word;
                reminderContainer.appendChild(span);
            });
            document.getElementById('sentence-textarea').value = '';
            document.getElementById('check-sentence-btn').classList.remove('hidden');
            document.getElementById('finish-btn').classList.add('hidden');
            document.getElementById('sentence-feedback').textContent = '';
        }
        
        function checkSentences() {
            const textarea = document.getElementById('sentence-textarea');
            const feedback = document.getElementById('sentence-feedback');
            const text = textarea.value.trim();
            feedback.textContent = '';

            if (text.length === 0) {
                feedback.textContent = "Please write at least one sentence.";
                return;
            }

            // Check sentence count
            const sentenceEndings = text.match(/[.!?]/g) || [];
            if (sentenceEndings.length < 2) {
                feedback.textContent = "Good start! Please write at least two sentences.";
                return;
            }
            
            // Check capitalization and final punctuation
            const startsWithCapital = /^[A-Z]/.test(text);
            const endsWithPunctuation = /[.!?]$/.test(text);
            if (!startsWithCapital || !endsWithPunctuation) {
                let message = "Almost there! Remember to ";
                if (!startsWithCapital) message += "start your first sentence with a capital letter";
                if (!startsWithCapital && !endsWithPunctuation) message += " and ";
                if (!endsWithPunctuation) message += "end your last sentence with punctuation (. ! ?)";
                feedback.textContent = message + ".";
                return;
            }

            // All checks passed
            feedback.textContent = "Excellent sentences!";
            feedback.className = "h-auto mt-2 text-center font-semibold text-green-600";
            document.getElementById('check-sentence-btn').classList.add('hidden');
            document.getElementById('finish-btn').classList.remove('hidden');
        }

        // --- Challenge Game Functions ---
        function showChallenge(stage) {
            currentStage = stage;
            showScreen(challengeScreen);
            document.getElementById('back-to-stage-menu-from-challenge').onclick = () => showStageMenu(stage);
            document.getElementById('challenge-intro').classList.remove('hidden');
            document.getElementById('challenge-game').classList.add('hidden');
            document.getElementById('challenge-results').classList.add('hidden');
            const highScore = localStorage.getItem(`spellingHighScore_Stage${stage}`) || 0;
            document.getElementById('high-score').textContent = highScore;
        }

        function startChallenge() {
            document.getElementById('challenge-intro').classList.add('hidden');
            document.getElementById('challenge-game').classList.remove('hidden');
            challengeState = { ...challengeState, score: 0, timeLeft: 120, missedPatterns: [], allStagePatterns: spellingData[currentStage] };
            document.getElementById('current-score').textContent = challengeState.score;
            document.getElementById('timer').textContent = challengeState.timeLeft;
            challengeState.timerId = setInterval(() => {
                challengeState.timeLeft--;
                document.getElementById('timer').textContent = challengeState.timeLeft;
                if (challengeState.timeLeft <= 0) endChallenge();
            }, 1000);
            nextChallengeQuestion();
        }

        function nextChallengeQuestion() {
            const patternData = challengeState.allStagePatterns[Math.floor(Math.random() * challengeState.allStagePatterns.length)];
            const correctWord = getWordsList(patternData)[Math.floor(Math.random() * getWordsList(patternData).length)];
            const incorrectWord = generateIncorrectSpelling(correctWord, patternData);
            challengeState.currentCorrectAnswer = correctWord;
            challengeState.currentPatternTitle = patternData.title;
            const choice1Btn = document.getElementById('choice-1'), choice2Btn = document.getElementById('choice-2');
            if (Math.random() > 0.5) {
                choice1Btn.textContent = correctWord;
                choice2Btn.textContent = incorrectWord;
            } else {
                choice1Btn.textContent = incorrectWord;
                choice2Btn.textContent = correctWord;
            }
        }

        function generateIncorrectSpelling(word, patternData) {
            let incorrectWord = word;
            let attempts = 0;
            const allWordsInStage = spellingData[currentStage].flatMap(p => getWordsList(p).map(w => w.toLowerCase())); 

            while (incorrectWord.toLowerCase() === word.toLowerCase() || allWordsInStage.includes(incorrectWord.toLowerCase())) {
                if (attempts > 20) { 
                    let i = Math.floor(Math.random() * (word.length - 1));
                    if(word.length > 1 && word[i] !== word[i+1]) {
                        incorrectWord = word.slice(0, i) + word[i+1] + word[i] + word.slice(i+2);
                    } else { 
                        incorrectWord = word + 's';
                    }
                    if(incorrectWord.toLowerCase() === word.toLowerCase()) incorrectWord = word + 'e';
                    break;
                }

                word = word.toLowerCase();
                const p = patternData.pattern;
                let candidate = "";

                const misspellings = {
                    'a_e': () => word.replace(p.split('_')[0], '').replace(p.split('_')[1], 'a'),
                    'i_e': () => word.replace(p.split('_')[0], '').replace(p.split('_')[1], 'i'),
                    'o_e': () => word.replace(p.split('_')[0], '').replace(p.split('_')[1], 'o'),
                    'u_e': () => word.replace(p.split('_')[0], '').replace(p.split('_')[1], 'u'),
                    'e_e': () => word.replace(p.split('_')[0], '').replace(p.split('_')[1], 'e'),
                    'kn': () => word.substring(1), 'wr': () => word.replace('wr', 'rw'),
                    'mb': () => word.slice(0, -1), 'sc': () => word.replace('sc', 's'),
                    'dge': () => word.slice(0, -3) + 'ge', 'tch': () => word.slice(0, -3) + 'ch',
                    'ck': () => word.slice(0,-2) + 'k', 'ph': () => word.replace('ph', 'f'),
                    'ly': () => word.slice(0, -2) + 'ley', 'ful': () => word + 'l',
                    'est': () => word.slice(0, -3) + 'ist', 'ff/ll/ss/zz': () => word.slice(0, -1),
                    'ie': () => word.replace('ie', 'ei'), 'ei': () => word.replace('ei', 'ie'),
                    'ue': () => word.replace('ue', 'uw'), 'ew': () => word.replace('ew', 'uw'),
                    'oi': () => word.replace('oi', 'oy'), 'oy': () => word.replace('oy', 'oi'),
                    'oa': () => word.replace('oa', 'ow'), 'ou': () => word.replace('ou', 'ow'),
                    'ai': () => word.replace('ai', 'ay'), 'ay': () => word.replace('ay', 'ai')
                };
                
                if (p === 'doubling') {
                     const wordObj = patternData.words.find(w => w.full.toLowerCase() === word);
                     candidate = (wordObj) ? wordObj.base + word.substring(wordObj.base.length + 1) : word + 's';
                }
                else if (misspellings[p]) {
                    candidate = misspellings[p]();
                } else {
                    let i = Math.floor(Math.random() * (word.length - 1));
                    candidate = (word.length > 2 && word[i] !== word[i+1]) ? word.slice(0, i) + word[i+1] + word[i] + word.slice(i+2) : word + 's';
                }
                incorrectWord = candidate;
                attempts++;
            }
            return incorrectWord;
        }


        function checkChallengeAnswer(chosenWord) {
            if (chosenWord === challengeState.currentCorrectAnswer) {
                challengeState.score++;
            } else {
                challengeState.missedPatterns.push(challengeState.currentPatternTitle);
            }
            document.getElementById('current-score').textContent = challengeState.score;
            nextChallengeQuestion();
        }

        function endChallenge() {
            clearInterval(challengeState.timerId);
            document.getElementById('challenge-game').classList.add('hidden');
            document.getElementById('challenge-results').classList.remove('hidden');
            document.getElementById('final-score').textContent = challengeState.score;
            const highScore = localStorage.getItem(`spellingHighScore_Stage${currentStage}`) || 0;
            const newHighScoreMsg = document.getElementById('new-high-score-msg');
            if (challengeState.score > highScore) {
                localStorage.setItem(`spellingHighScore_Stage${currentStage}`, challengeState.score);
                newHighScoreMsg.classList.remove('hidden');
            } else {
                newHighScoreMsg.classList.add('hidden');
            }
            const reviewList = document.getElementById('patterns-to-review-list');
            reviewList.innerHTML = '';
            const uniqueMissed = [...new Set(challengeState.missedPatterns)];
            const reviewContainer = document.getElementById('patterns-to-review-container');
            if (uniqueMissed.length > 0) {
                uniqueMissed.forEach(pattern => {
                    const li = document.createElement('li');
                    li.textContent = pattern;
                    reviewList.appendChild(li);
                });
                reviewContainer.classList.remove('hidden');
            } else {
                 reviewContainer.classList.add('hidden');
            }
        }

        // --- Event Listeners ---
        document.getElementById('submit-gap-word-btn').addEventListener('click', checkGappedWord);
        document.getElementById('gapped-word-input').addEventListener('keyup', (e) => { if(e.key === 'Enter') checkGappedWord(); });
        document.getElementById('choice-1').onclick = () => checkChallengeAnswer(document.getElementById('choice-1').textContent);
        document.getElementById('choice-2').onclick = () => checkChallengeAnswer(document.getElementById('choice-2').textContent);
        
        const wordFindGridEl = document.getElementById('word-find-grid');
        let isPointerDown = false;
        const handlePointerDown = (e) => {
            let target = document.elementFromPoint(e.clientX, e.clientY);
            if (target && target.classList.contains('grid-cell')) {
                e.preventDefault(); isPointerDown = true;
                wordFindState.startCell = target; updateSelection(target);
            }
        }
        const handlePointerMove = (e) => {
            if (isPointerDown) {
                let target = document.elementFromPoint(e.clientX, e.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    e.preventDefault(); updateSelection(target);
                }
            }
        }
        const handlePointerUp = (e) => { if (isPointerDown) { isPointerDown = false; checkSelection(); } }

        wordFindGridEl.addEventListener('pointerdown', handlePointerDown);
        wordFindGridEl.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);

        // Prevent grid from being dragged or moved on touch devices
        wordFindGridEl.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });
        wordFindGridEl.addEventListener('pointermove', function(e) {
            e.preventDefault();
        }, { passive: false });
  

