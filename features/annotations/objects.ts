const profile = {
  firstname: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const {
  age,
  firstname,
  coords: { lat, lng }
}: {
  age: number;
  firstname: string;
  coords: { lat: number; lng: number };
} = profile;
