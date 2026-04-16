// index.js
const name = process.argv[2];
if (!name) {
  console.log("Please provide your name!");
} else {
  console.log(`Welcome, ${name}!`);
}
// ... rest of your code
