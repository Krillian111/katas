function findNeedle(haystack) {
    iterator = haystack.entries();
    for ([index, value] of iterator){
        if(haystackExport.isNeedle(value)){
            return `found the needle at position ${index}`;
        }
    }
  }


const haystackExport = {
    findNeedle: function(input){
        return findNeedle(input);
    },

    isNeedle: function(input){
        return input === "needle";
    } 
}

if (exports)
{
  module.exports = haystackExport;
}

