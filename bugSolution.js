function myFunction() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}

myFunction(); //This will print 0, 1, 2, 3, 4, 5