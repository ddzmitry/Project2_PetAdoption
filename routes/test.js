
var petfinder = require('petfinder')('d9fef56b9ddab7a97e72e53d5ac6fe30', '4b44d9d627a82b811c3986f75db408f8');

arr = [ '36819925',
'37464733',
'37378693',
'37360902',
'37256431',
'37862944',
'39004267' ]
arr.forEach(function(element) {
    petfinder.getPet(element,{}, function(err, breeds) {
            
            if(breeds){
                breeds
            } 
            if(err){
                console.log(err)
            }
        })
}, this);
