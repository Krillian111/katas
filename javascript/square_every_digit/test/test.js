const chai = require("chai");
const assert = chai.assert;

// expose functions for test to allow same syntax as in browser/codewars
const underTest = require("../square-every-digit");
const squareDigits = underTest.squareDigits;

describe("squareDigits", function(){
    it("squares each digit individually", function(){
        assert.equal(squareDigits(9119), 811181);
    });
});


