function findNeedle(haystack) {
    return "";
  }


const haystack = {
    findNeedle: function(input){
        return findNeedle(input);
    },

    isNeedle: function(input){
        return input === "needle";
    } 
}

if (exports)
{
  module.exports = haystack;
}

