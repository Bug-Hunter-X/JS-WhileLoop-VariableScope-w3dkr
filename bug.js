function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
    i++;
  }
}

myFunction(); //This will print 0, 1, 2, 3, 4, 5

//Error:The above code will execute successfully, but if the variable i is declared outside of the while loop ,it will not work as expected.Because in javascript variables have function scope, hence the variable i is accessible outside the while loop,therefore any change to its value inside the while loop will be reflected outside of the while loop