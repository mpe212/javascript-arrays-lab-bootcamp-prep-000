const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

destructivelyAppendKitten(name){
 kittens.push(name); 
 return kittens;
}

destructivelyAppendKitten('Ralph');

destructivelyPrependKitten(name){
  kittens.shift(name);
  return kittens;
}

destructivelyPrependKitten("Bob");

