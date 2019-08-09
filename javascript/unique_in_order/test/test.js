const chai = require("chai");
const assert = chai.assert;

// expose functions for test to allow same syntax as in browser/codewars
const underTest = require("../unique-in-order");
const uniqueInOrder = underTest.uniqueInOrder;


describe("uniqueInOrder", function(){
    it("provided test", function(){
        chai.expect(uniqueInOrder('AAAABBBCCDAABBB')).to.eql(['A','B','C','D','A','B']);
        chai.expect(uniqueInOrder('')).to.eql([]);
        chai.expect(uniqueInOrder([1,1,2,1,4,5])).to.eql([1,2,1,4,5]);
    });
});

describe("equalToPreviousPredicate", function(){
    it("returns false for first encounter of certain element", function(){
        const equalToPreviousPredicate = underTest.equalToPreviousPredicate();
        chai.expect(equalToPreviousPredicate("A")).to.equal(false);
    });
    it("returns true for consecutive encounter of certain element", function(){
        const equalToPreviousPredicate = underTest.equalToPreviousPredicate();
        equalToPreviousPredicate("A");
        chai.expect(equalToPreviousPredicate("A")).to.equal(true);
    })
    it("resets when encountering a different element", function(){
        const equalToPreviousPredicate = underTest.equalToPreviousPredicate();
        equalToPreviousPredicate("A");
        equalToPreviousPredicate("B");
        chai.expect(equalToPreviousPredicate("A")).to.equal(false);
    })
})
