function accum(input) {
    const individualCharacters = mumbling.splitIntoIndividualCharacters(input);
    const charactersWithMultiplicity = mumbling.associateCharacterWithMultiplicity(individualCharacters);
    const repeatedCharacters = charactersWithMultiplicity.map(mumbling.repeatCharacterByMultiplicity);
    const capitalizedRepeatedCharacters = repeatedCharacters.map(mumbling.capitalizeFirstCharacter);
    return mumbling.joinWordsWithHyphen(capitalizedRepeatedCharacters);
}


const mumbling = {
    accum : function(s){
        return accum(s);
    },

    splitIntoIndividualCharacters : function(inputString){
        return inputString.split("");
    },

    associateCharacterWithMultiplicity: function(inputArray){        
        let result = [];
        let index;
        for(index=0; index<inputArray.length; index++){
            result.push({character:inputArray[index], multiplicity:index+1});
        }
        return result;
    },

    repeatCharacterByMultiplicity: function(toRepeat){
        let result = "";
        for(let multiplicityLeft = toRepeat.multiplicity; multiplicityLeft>0; multiplicityLeft--){
            result = result.concat(toRepeat.character.toLowerCase());
        }
        return result;
    }, 
    
    capitalizeFirstCharacter: function(toCapitalize){
        const firstChar = toCapitalize[0];
        return firstChar.toUpperCase().concat(toCapitalize.substring(1));
    },

    joinWordsWithHyphen: function(inputArrayToJoin){
        return inputArrayToJoin.join("-");
    }
}

if (exports)
{
  module.exports = mumbling;
}