@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';
  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}...`;
  }

  @logError('Ooops! Boat was sunk in ocean!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('Swish!');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(targer: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
