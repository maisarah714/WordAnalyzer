# WordAnalyzer
Analyzes any word given by user and determine the number of consonants and vowels. It is developed as a simple React Native Mobile Application.


## The Pseudocode
- Get input from user using textbox in render function
- Change the input into all lower case, and remove any unwanted symbols
- Initialize local variables vowel and consonant to 0
- Loop through the input from first character until the end
    - Check if the character contains vowel (a/e/i/o/u)
        - if yes, plus 1 in vowel
        - if not, plus 1 in consonant
- Assign the value to its state
- Display
