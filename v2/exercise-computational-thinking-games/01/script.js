// Throw the dice
// Generate random numbers between 1 - 6 for each throw
// If first number is 1, add it to the latter-list and so on
// If not, keep throwing the dice until the latter is reached in order 1,2,3,4,5,6
// Meanwhile, count each throw during the whole process
// End the game when latter is achieved with the total number of throws

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