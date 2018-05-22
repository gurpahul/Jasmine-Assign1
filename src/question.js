// 1
const positiveSum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}

//2
const isDivisible = (number, divisorA, divisorB) => number % divisorB === 0 && number % divisorA === 0

//3

const solution = (str) => str.split('').reverse().join('')

//4
const reverseSeq = (n) => {
    let answer = [];          
    
    for (let i=n; i>0; i--){  
      answer.push(i);        
    }
    
    return answer;            
  }