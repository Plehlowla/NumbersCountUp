const numbers = [...document.querySelectorAll('.number')];
// console.log(numbers);


// for(const number of numbers){
//     console.log(number);
// }

const updateCount = (el) => {
    // console.log(el);
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    // const increment = 1;
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if(initialValue > value){
            el.textContent = `${value}+`
            clearInterval(increaseCount)
            return;
        }


        el.textContent = `${initialValue}+`;
    }, 1);
    console.log(increaseCount);
};

numbers.forEach((number) => {
    // console.log(number);
    updateCount(number);
});
