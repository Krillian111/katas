var uniqueInOrder=function(iterable){
  toExport.uniqueInOrder(iterable);
}


const toExport = {
    uniqueInOrder: function(iterable){
        const result = [];
        const equalToPrevious = toExport.equalToPreviousPredicate();
        for(const element of iterable){
            if(!equalToPrevious(element)){
                result.push(element);
            }
        }
        return result;
    },

    equalToPreviousPredicate: function(){
        var previous;
        return function(current){
            result = previous === current; 
            previous = current;
            return result;
        }
    }
}

if (exports)
{
  module.exports = toExport;
}