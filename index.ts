#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

// Welcome message with chalk
console.log(chalk.yellow('Welcome Code With Abdul Waheed'));

// Function to display array methods examples
const showExamples = async () => {
  // Initial state of fruits and numbers arrays
  let fruits: string[] = ['apple', 'banana'];
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  while (true) {
    // Interactive prompt
    const answers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'methods',
        message: 'Which array methods would you like to see examples of?',
        choices: [
          'push',
          'unshift',
          'shift',
          'pop',
          'map',
          'filter',
          'slice',
          'reverse',
        ],
      },
    ]);

    const selectedMethods = answers.methods;

    for (const method of selectedMethods) {
      switch (method) {
        case 'push':
          console.log(chalk.green('\n1- push:'));
          const pushAnswer = await inquirer.prompt([
            {
              type: 'input',
              name: 'element',
              message: 'Enter the element to push:',
            },
          ]);
          const pushElement = pushAnswer.element;
          fruits.push(pushElement);
          break;
        case 'unshift':
          console.log(chalk.green('\n2- unshift:'));
          const unshiftAnswer = await inquirer.prompt([
            {
              type: 'input',
              name: 'element',
              message: 'Enter the element to unshift:',
            },
          ]);
          const unshiftElement = unshiftAnswer.element;
          fruits.unshift(unshiftElement);
          break;
        case 'shift':
          console.log(chalk.green('\n3- shift:'));
          const shiftedElement = fruits.shift();
          console.log('Shifted element:', shiftedElement);
          break;
        case 'pop':
          console.log(chalk.green('\n4- pop:'));
          const poppedElement = fruits.pop();
          console.log('Popped element:', poppedElement);
          break;
        case 'map':
          console.log(chalk.green('\n5- map:'));
          const mappedArray = fruits.map((fruit, index) => `${index + 1}: ${fruit}`);
          console.log('Mapped array:', mappedArray);
          break;
        case 'filter':
          console.log(chalk.green('\n6- filter:'));
          const filteredArray = fruits.filter(fruit => fruit.startsWith('a'));
          console.log('Filtered array:', filteredArray);
          break;
        case 'slice':
          console.log(chalk.green('\n7- slice:'));
          const slicedArray = fruits.slice(1, 3);
          console.log('Sliced array:', slicedArray);
          break;
        case 'reverse':
          console.log(chalk.green('\n8- reverse:'));
          fruits.reverse();
          console.log('Reversed array:', fruits);
          break;
        default:
          console.log(chalk.red('Unknown method selected.'));
      }
    }

    console.log('Updated fruits:', fruits);

    // Ask if the user wants to continue
    const continueAnswer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to continue?',
        default: true,
      },
    ]);

    if (!continueAnswer.continue) {
      break;
    }
  }
};

showExamples();
