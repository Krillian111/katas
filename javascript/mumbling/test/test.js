const chai = require("chai");
const assert = chai.assert;

const underTest = require("../mumbling");
const accum = underTest.accum;
const splitIntoIndividualCharacters= underTest.splitIntoIndividualCharacters;
const associateCharacterWithMultiplicity = underTest.associateCharacterWithMultiplicity;
const repeatCharacterByMultiplicity = underTest.repeatCharacterByMultiplicity;
const capitalizeFirstCharacter = underTest.capitalizeFirstCharacter;
const joinWordsWithHyphen = underTest.joinWordsWithHyphen;

describe("accum",function() {
    it("Basic tests",function() {    
        assert.equal(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        assert.equal(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        assert.equal(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        assert.equal(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        assert.equal(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
    })
});

describe("splitIntoIndividualCharacters", function(){
    it("returns an array of all input characters", function(){
        const result = splitIntoIndividualCharacters("abcd");
        ["a", "b", "c", "d"].forEach(
            el => assert.isTrue(result.includes(el))
        );
    })
    it("maintains order", function(){
        assert.equal(splitIntoIndividualCharacters("abcd")[2], "c");
    })
});

describe("associateCharacterWithMultiplicity", function(){
    it("return an array of the same length as the input", function(){
        assert.equal(associateCharacterWithMultiplicity(["a", "b", "c", "d"]).length, 4);
    });
    it("returns an array of objects with property multiplicity", function(){
        associateCharacterWithMultiplicity(["a", "b", "c", "d"]).forEach(
            el => assert.isTrue(el.hasOwnProperty("multiplicity"))
        )
    });
    it("adds multiplicity equal to index in array plus one", function(){
        const result = associateCharacterWithMultiplicity(["a", "b", "c", "d"]);
        assert.equal(result[0].multiplicity, 1);
        assert.equal(result[1].multiplicity, 2);
        assert.equal(result[3].multiplicity, 4);
    });
    it("returns an array of objects with property character which contains the corresponding character", function(){
        const result = associateCharacterWithMultiplicity(["a", "b", "c", "d"]);
        result.forEach(
            el => assert.isTrue(el.hasOwnProperty("character"))
        )
        assert.equal(result[0].character, "a");
        assert.equal(result[1].character, "b");
        assert.equal(result[3].character, "d");
    });
});

describe("repeatCharacterByMultiplicity", function(){
    it("returns String with input character repeated as often as its multiplicity", function(){
        assert.equal(repeatCharacterByMultiplicity({character: "a", multiplicity: 4}), "aaaa");
    });
    it("repeatsTheCharacterAsLowerCase", function(){
        assert.equal(repeatCharacterByMultiplicity({character: "A", multiplicity: 4}), "aaaa");
    });
});

describe("capitalizeFirstCharacter", function(){
    it("returns input String with first letter capitalized", function(){
        assert.equal(capitalizeFirstCharacter("aaaa"), "Aaaa");
    });
});

describe("joinWordsWithHyphen", function(){
    it("takes an array of Strings and returns a single String with all of them joined delimited by a hyphen", function(){
        assert.equal(joinWordsWithHyphen(["A", "Bb", "Ccc"]), "A-Bb-Ccc");
    });
});
