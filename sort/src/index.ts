import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -11, 50, 100, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('thisIsSoCool');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(6);
linkedList.add(-1);
linkedList.add(3);
linkedList.add(2);
linkedList.add(0);
linkedList.add(1);
linkedList.add(4);
linkedList.sort();
linkedList.print();
