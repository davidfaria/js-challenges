import { toCamelCase } from './04-ConvertStringToCamelCase';

function main() {
  console.log(toCamelCase('the-stealth-warrior'));
  console.log(toCamelCase('The-Stealth-Warrior'));
  console.log(toCamelCase('A-B-C'));
}

main();
