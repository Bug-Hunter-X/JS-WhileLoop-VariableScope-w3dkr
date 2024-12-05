# Unexpected Variable Scope Behavior in JavaScript While Loop

This repository demonstrates a common JavaScript bug related to variable scope within loops. The `bug.js` file contains code that exhibits unexpected behavior due to improper variable scoping. The `bugSolution.js` file provides the corrected code with improved scoping. This example highlights the importance of understanding JavaScript's variable scoping rules to avoid unexpected behavior in your applications.

## Bug Description
The bug arises from declaring the loop counter variable (`i`) outside of the loop's scope. This allows the loop to modify the variable but also results in this changed variable value being available beyond the loop, potentially leading to unintended consequences.

## Bug Solution
The corrected code in `bugSolution.js` demonstrates the correct way to handle loop counter variables, ensuring they are properly scoped to the loop itself.