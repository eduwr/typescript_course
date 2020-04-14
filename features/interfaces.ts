interface Reportable {
  summary(): string;
}

const oldCivic = {
  model: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.model}, Year: ${this.year}, is Broken? ${this.broken}`;
  }
};

const newDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink is ${this.color}, ${
      this.carbonated ? 'carbonated' : 'not carbonated'
    } with ${this.sugar}g of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(newDrink);

// generic interfaces can be more reusable
