const fizzbuzz = () => {
    for (let nb = 1; nb <= 151; nb++) {
        if (nb % 3 === 0 && nb % 5 === 0) {
            console.log("FizzBuzz\n");
        }
        else if (nb % 5 === 0) {
            console.log("Buzz\n");
        }
        else if (nb % 3 === 0) {
            console.log("Fizz\n");
        } else {
            console.log(nb + '\n');
        }
    }
}

fizzbuzz();