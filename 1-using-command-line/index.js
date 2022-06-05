const arguments = process.argv.slice(2);


const cicrleArea = (r) => {
    const pi = 3.14;
    const cirleArea = pi * (r ** 2); 

    return console.log(cirleArea);
}

cicrleArea(arguments[0] * 1);