
function letterFrequency(str) {
      let lettersFreq = {};

      for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            
            if (lettersFreq[letter]) {
                  lettersFreq[letter]++;
            } else {
                  lettersFreq[letter] = 1;
            }
      }
      console.log(lettersFreq);
      return lettersFreq;
}
letterFrequency('flaggstångsknoppsputsarexpert');