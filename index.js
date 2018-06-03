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

destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

destructivelyRemoveFirstKitten(){
  kittens.unshift();
  return kittens;
}

appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}

appendKitten("Broom");

prependKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

prependKitten("Arnold");



