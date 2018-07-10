var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pinky';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);


// Named function
function eatDot() {
  console.log("MUNCH!");
}

//Anonymous function
//here we assign the function to a variable instead of giving it a name directly
car eatDot = function() {
  console.log("MUNCH!");
}
