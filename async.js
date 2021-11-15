window.onload= function(){
//     function* gen(){     //pause function
//         var x = yield 10;  //pause function after yielding value 10 and have to start again 
//         console.log(x);
//     }
// var myGen = gen();    
// console.log(myGen.next());  //start again and it will resume code after grab value 10 and pause again and pass back to next
// console.log(myGen.next()); //carry code to the end again and so done:true
// }

genWrap(function(){
    var tweets=yield $.get("data/tweets.json");
    console.log(tweets);
    var friends=yield $.get("data/friends.json");
    console.log(friends);
    var fruits=yield $.get("data/fruits.json");
    console.log(fruits);
});
function genWrap(generator){ //passing avove generators into genwrap function
    var gen = generator();
    function handle(yielded){
        if(!yielded.done){
            yielded.value.then(function(data){ //promised interface built and  callback  function which takes data retrievd is fired
                return handle (gen.next(data)); //and after returning it moves to next data like freinds and then again check yielded handled by callback and then move to next fruits
            })
        }
    }
    return handle(gen.next());//first return gen next that is going to fire "get"request avove and going to yield result and pass that object to function handle
}
};