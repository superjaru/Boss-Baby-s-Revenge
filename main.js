const revenge = (input) => {
  let temp = { S: 0, R: 0 };
  for (let i = 0; i < input.length; i++) {
    // if Boss baby start to shoot first then return Bad boy
    if (input[i] === 'R' && temp['S'] === 0) return 'Bad boy'
    // count S , R
    if (input[i] === "S") temp[input[i]]++; 
     else {
      temp[input[i]]++;
      // if the next index is S and volume of R > S , reassign both value to 0
      if (input[i + 1] === "S" ) {
        if (temp['R'] >= temp['S'] ) temp = { S: 0, R: 0 };
      } 
    }
  }
  // finalize the number of shoots if it match the criteria
  if (temp["S"] > temp["R"]){
      return "Bad boy"
  }else {return "Good boy"}
};

// Test cases from example
console.log(revenge("SRSSRRR"));   // "Good boy"
console.log(revenge("RSSRR"));     // "Bad boy"
console.log(revenge("SSSRRRRS")); // "Bad boy"
console.log(revenge("SRRSSR")); // "Bad boy"
console.log(revenge("SSRSRRR"));  // "Good boy"
 

// Additional test cases
console.log(revenge("SRRRSSSRSSRRSRR"));  // "Bad boy"
console.log(revenge("S"));  // "Bad boy"
console.log(revenge("R"));  // "Bad boy"





