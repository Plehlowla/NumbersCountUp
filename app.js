const numbers = [...document.querySelectorAll('.number')];
// console.log(numbers);


// for(const number of numbers){
//     console.log(number);
// }

const updateCount = (el) => {
    // console.log(el);
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/1000);
    let initialValue = 0;
}

numbers.forEach((number) => {
    // console.log(number);
    updateCount(number);
});
