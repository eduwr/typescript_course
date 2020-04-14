const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi = ['brown', true, 40]; //array aways lose information
// pepsi[0] = 40;
// pepsi[2] = 'brown';

const pepsi: [string, boolean, number] = ['brown', true, 40];

// another option is to create a type alias as follows

type Drink = [string, boolean, number];

const lemonade: Drink = ['green', false, 20];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples are not very useful in typescript because they bring type definition, but it lacks the meaning
const carSpects: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
