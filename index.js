// const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

// function destructivelyAppendKitten(name){
//   kittens.push(name); 
//   return kittens;
// }

// console.log(destructivelyAppendKitten('Ralph'));

// function destructivelyPrependKitten(name){
//   kittens.unshift(name);
//   return kittens;
// }

// console.log(destructivelyPrependKitten("Bob"));

// function destructivelyRemoveLastKitten(){
//   kittens.pop();
//   return kittens;
// }
// console.log(destructivelyRemoveLastKitten(kittens));

// function destructivelyRemoveFirstKitten(){
//   kittens.shift();
//   return kittens;
// }
// console.log(destructivelyRemoveFirstKitten(kittens));

function appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}

appendKitten("Broom");

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



