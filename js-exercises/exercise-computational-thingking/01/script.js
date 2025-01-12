
const throwDice = () => {
      const latterNums = [1, 2, 3, 4, 5, 6];
      let latter = [];
      let totalThrows = 0;

      while (latter.length < latterNums.length) {
            const diceNum = Math.floor(Math.random() * 6 + 1);
            totalThrows++;
            
            if (diceNum === latterNums[latter.length]) {
                  latter.push(diceNum);
            }
      }
      console.log(`You finished the game with ${totalThrows} throws!`)
}
throwDice();