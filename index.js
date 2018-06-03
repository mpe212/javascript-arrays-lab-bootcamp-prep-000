// const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

// console.log(kittens);

destructivelyAppendKitten(name){
  kittens.push(name); 
  return kittens;
}

console.log(destructivelyAppendKitten('Ralph'));

// destructivelyPrependKitten(name){
//   kittens.shift(name);
//   return kittens;
// }

// destructivelyPrependKitten("Bob");

// destructivelyRemoveLastKitten(){
//   kittens.pop();
//   return kittens;
// }

// destructivelyRemoveFirstKitten(){
//   kittens.unshift();
//   return kittens;
// }

// appendKitten(name){
//   var newKittens = [...kittens, name];
//   return newKittens;
// }

// appendKitten("Broom");

// prependKitten(name){
//   var newKittens = [name, ...kittens];
//   return newKittens;
// }

// prependKitten("Arnold");

// removeLastKitten(){
//   var newKittens = kittens.slice(0,kittens.length-1);
//   return newKittens;
// }

// removeFirstKitten(){
//   var newKittens = kittens.slice(1);
//   return newKittens;
// }



