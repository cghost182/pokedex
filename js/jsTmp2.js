var MyApplication = function() {
   var data = 'hello';

   this.sum = function(first, second) {
      return first + second;
   }

   this.showData = function() {
      return data;
   }
};