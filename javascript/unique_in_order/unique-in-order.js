var uniqueInOrder=function(iterable){
  toExport.uniqueInOrder(iterable);
}


const toExport = {
    uniqueInOrder: function(iterable){
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