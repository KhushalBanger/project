// index.js

// Taking input from command line
const name = process.argv[2];

if (!name) {
    console.log("Please provide your name!");
} else {
    console.log(`Welcome, ${name}!`);
}

// Simple addition function
function add(a, b) {
    return a + b;
}

console.log("Sum of 5 + 3 is:", add(5, 3));


