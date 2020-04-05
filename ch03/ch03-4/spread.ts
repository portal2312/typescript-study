let coord = {...{x: 0}, ...{y: 0}};
console.log(coord);

let part1 = {name: 'jane'};
let part2 = {age: 22};
let part3 = {city: 'Seoul', 'country': 'KO'};
let merged = {...part1, ...part2, ...part3};
console.log(merged);