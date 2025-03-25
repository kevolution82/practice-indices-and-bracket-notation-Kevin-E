// Task 1: Create a multi-dimensional array (3 shelves with 3 items each)
let library = [
  ["The Hobbit", "1984", "Inception"],      // Shelf 0
  ["The Matrix", "Dune", "The Godfather"],  // Shelf 1
  ["Interstellar", "Brave New World", "Avatar"] // Shelf 2
];

// Task 2: Access and log all elements using bracket notation with numbers
console.log("Task 2 - Access with Numbers:");
console.log(library[0][0]); // The Hobbit
console.log(library[0][1]); // 1984
console.log(library[0][2]); // Inception
console.log(library[1][0]); // The Matrix
console.log(library[1][1]); // Dune
console.log(library[1][2]); // The Godfather
console.log(library[2][0]); // Interstellar
console.log(library[2][1]); // Brave New World
console.log(library[2][2]); // Avatar

// Task 3: Access and log all elements using variables as indices
console.log("\nTask 3 - Access with Variables:");
for (let row = 0; row < 3; row++) {
  for (let item = 0; item < 3; item++) {
    console.log(library[row][item]);
  }
}

// Task 4: Print all items on the second shelf (shelf index 1)
console.log("\nTask 4 - Items on Second Shelf:");
for (let i = 0; i < library[1].length; i++) {
  console.log(library[1][i]);
}
