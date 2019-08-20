// function only declared because codewars requires it
function squareDigits(num){
    return squareEveryDigit.squareDigits(num);
}

const squareEveryDigit = {

    squareDigits: function(integer){
        let integerAsString = integer.toString(10);
        let individualDigits = integerAsString.split("");
        let squaredIndividualDigits = individualDigits.map((value, index) => {
            return value*value;
        });
        let squaredDigitsConcatenated = squaredIndividualDigits.join("");
        return Number.parseInt(squaredDigitsConcatenated);
    },

}

if(exports){
    module.exports = squareEveryDigit;
}


