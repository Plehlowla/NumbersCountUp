const numbers = [...document.querySelectorAll('.number')];
// console.log(numbers);


// for(const number of numbers){
//     console.log(number);
// }

const updateCount = (el) => {
    console.log(el);
}

numbers.forEach((number) => {
    // console.log(number);
    updateCount(number);
});
