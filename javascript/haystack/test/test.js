const chai = require("chai");
const assert = chai.assert;
const haystack = require("../haystack");
const findNeedle = haystack.findNeedle;
const isNeedle = haystack.isNeedle;

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// use chai instead of codewars test framework for the provided tests
const Test = {assertEquals:chai.assert.equal};
describe("findNeedle", function(){
    it("provided tests", function(){
        Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3');
        Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5');
        Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30');
    })
});

describe("isNeedle", function(){
    it("checks if the input is equal to the String 'needle'", function(){
        assert.isTrue(isNeedle("needle"));
        assert.isFalse(isNeedle("noNeedle"));
        assert.isFalse(isNeedle(5));
        assert.isFalse(isNeedle(undefined));
        assert.isFalse(isNeedle(true));
    })
})
