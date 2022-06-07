import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
console.log(stock);
console.log(isCoffeeMachineReady);
 
import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);
 
/* output
10
*/
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/