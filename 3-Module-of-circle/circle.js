const circleArea = (r) => {
    const pi = 3.14;
    const cirleArea = pi * (r ** 2); 

    return console.log(cirleArea);
}


const circleCircumference = (r) => {
    const pi = 3.14;
    const circleCircumference = 2 * pi * r; 

    return console.log(circleCircumference);
}

module.exports = {
    circleArea,
    circleCircumference
}