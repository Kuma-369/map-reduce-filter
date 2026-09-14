// List of data
// get the total score of forces users only.
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// FILTER the data of force users first
// REDUCE the data of scores of each force users 
// calculate the total scores

const forceUsers = personnel.filter(function(pilot) {
    return pilot.isForceUser; 
});

// Shorter with arrow functions:
// const forceUsers = personnel.filter(pilot => pilot.isForceUser);

let totalForceUsersScore = forceUsers.reduce(function(acc, score) {
    return acc + score.pilotingScore + score.shootingScore;
}, 0);

// Shorter with arrow functions:
// let totalForceUsersScore = forceUsers.reduce((acc, score) => acc + score.pilotingScore + score.shootingScore, 0);

console.log(totalForceUsersScore); // total score is 420

// const totalJediScore = personnel
//   .filter(person => person.isForceUser)
//   .map(jedi => jedi.pilotingScore + jedi.shootingScore)
//   .reduce((acc, score) => acc + score, 0);