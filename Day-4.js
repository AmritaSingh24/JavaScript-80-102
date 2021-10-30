//Reducing  an Array
// const numbers = [1, -1, 2, 3];
// const  sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(sum);

// Exercise
// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);
// function arrayFromRange(min, max){
//     const output = [];
//     for (let i = min; i<= max; i++)
//     output.push(i);
//     return output;
// }

//Exercise
// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, -1));
// function includes(array, searchElement){
//     for (let element of array)
//         if(element === searchElement)
//             return true;
//     return false;
// }

//exercise
// const numbers = [1, 2, 3, 4, 1, 1];
// const output = except(numbers, [1, 2, 3, 4]);
// console.log(output);
// function except(array, excluded){
//     const output = [];
//     for(let element of array)
//      if (!excluded.includes(Element))
//         output.push(element);
//     return output;
// }

//Exercise
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 1);
// console.log(output);
// function move(array, index, offset){
//     const position = index + offset;
//     if(position >= array.length){
//         console.error('Invalid offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output;
// }

//Exercise
// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);

// console.log(count);
// function countOccurrences(array, searchElement){
//     return array.reduce((accumulator, current) =>{
//         const occurence = (current === searchElement)
//         console.log(accumulator, current, searchElement)? 1: 0;
//         return accumulator + occurence;
//     }, 0);
// }

//Exercise
// const numbers = [1, 2, 3, 4];
// const max = getMax([1, 2, 2, 1, 3]);
// console.log(max);
// function getMax(array){
//     if (array.length === 0) return undefined;
//     return array.reduce((a, b) =>{
//        return (a > b) ? a : b
//     });
// }

//Exercise 
// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating:4.5}
// ];
// const title = movies
//  .filter(m => m.year === 2018 && m.rating >= 4)
//  .sort((a, b) => a.rating - b.rating)
//  .reverse()
//  .map(m => m.title)
// console.log(title);

//Function declarations vs Expression
// //Function declaration
// function walk(){
//     console.log('walk');
// };
// //Anonymous Function Expression
// let run = function(){
//     console.log('run');
// }
// let move = run;
// run();
// move();

//Arguments
// function sum(a, b){
//     let total = 0;
//     for (let value of arguments)
//     total += value;
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 10));

// The Rest Operator
// function sum(discount, ...prices){
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30, 1));

// // Defaults Parameter
// function interest (principal, rate = 3.5, years = 5){
// return principal * rate / 100 * years;
// }
// console.log(interest(10000));

//Getters & setters
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.FirstName  = parts[0];
//         this.lastName = parts[1];
//     }
// };
// person.fullName = 'John Smith';
// console.log(person);

//Try and Catch
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',

//     set fulName(value){
//         if (typeof value !== 'string')
//          throw new Error('value is not a string.');
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//         throw new console.Error('Enter a first and last name');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
// try{
//     person.fulName = null;
// }
// catch (e){
//     alert(e);
// }
 
// console.log(person)

//Local and Gobal Scope
// const color = 'red';
// function start(){
//     const message = 'hi';
//     const color = 'blue';
//     console.log(color);
// }
// function stop(){
//     const message = 'bye';
// }
// start();

//Exercise
// console.log(sum(1, 2, 3, 4));
// function sum(...items){
//     if (items, length === 1 && Array.isArray(item[0]))
//     items = [...items[0]];
//     return items.reduce((a, b) => a + b);
// }

//Exercise
// const circle = {
//     radius: 1,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }
// };
// console .log(circle.area);

// Exercise
try{
    const numbers = [1, 2, 3, 4];
    const count = countOccurrence(null, 1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}
function countOccurrence(array, searchElement){
    if (!Array.isArray(array))
        throw new Error('Invalid array.');
    return array.reduce((accumulator, current) =>{
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0
    );
}