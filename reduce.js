  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

// const nums = [0,1,2,3,4]
// let sum = nums.reduce((acc,curr) => {
// console.log (
// "Accumaltor: ", acc,
// "Current Value: ", curr,
// "Total: ", acc + curr
// )
//   return acc + curr
// }, 0)
// console.log(sum)

// const nums = [0,1,2,3,4]
// let sum = nums.reduce((acc,curr) => acc + curr, 0)
// console.log(sum)



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

// console.log(teamMembers[0]['yrsExperience'])

// let totalYrsExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0
// )

// console.log(totalYrsExp)


// Grouping by a property, and totaling it too
// {Developer: 12, Desigener: 4}
// let expByprofession = teamMembers.reduce((acc, curr) => {
// let key = curr.profession;
// if (!acc[key]) {
//   acc[key] = curr.yrsExperience
// } else {
//   acc[key] += curr.yrsExperience
// }
// return acc
// }, {})

// console.log(expByprofession)

// let namesByprofession = teamMembers.reduce((acc, curr) => {
//   let {name, profession} = curr 
//   if (!acc[profession]) {
//   acc[profession] = []
//   }
//   acc[profession].push(name)
//   return acc
//   }, {})
  
//   console.log(namesByprofession)



/*  
Challenge:
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score. 
You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
*/

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

// Using if statement instead of ternary operator

const maxEngScore = students.reduce((acc, curr) => {
  if (acc.max > curr.results.english) {
      return acc;
  } else {
      return { name: curr.name, max: curr.results.english };
  }
}, { name: '', max: 0 });

console.log(maxEngScore)


