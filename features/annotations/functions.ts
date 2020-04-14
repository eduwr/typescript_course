// Type annotation for a function (recommended)
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference on return (not recommended)
const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void Type can only return null or undefined
  //return null
  //return undefined
};

// never Type function will never return anything
const throwError = (message: string): never => {
  throw new Error(message);
};

// The function below is more usual
const trwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
