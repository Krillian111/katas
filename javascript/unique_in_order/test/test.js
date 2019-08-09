const chai = require("chai");
const assert = chai.assert;

// expose functions for test to allow same syntax as in browser/codewars
const underTest = require("../unique-in-order");
const uniqueInOrder = underTest.uniqueInOrder;


describe("uniqueInOrder", function(){
    it("provided test", function(){
        chai.expect(uniqueInOrder('AAAABBBCCDAABBB')).to.eql(['A','B','C','D','A','B']);
    });
});
