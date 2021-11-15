window.onload = function(){

$.get("data/tweets.json").then(function(tweets){
    console.log(tweets);
    return $.get("data/friends.json");
}).then(function(friends){
    console.log(friends);
    return $.get("data/fruits.json");
}).then(function(fruits){
    console.log(fruits);
});



    function get(url) { //function gets URL which is just the data we want to collect
return new Promise(function(resolve,reject){ //returning new promise object that takes function with 2 parameters
    var xhttp= new XMLHttpRequest();
    xhttp.open("GET",url,true);//open method to pass that url with asynchronus = true
    xhttp.onload=function(){    //on window load passing function
        if(xhttp.status == 200){   //if status is  equal to 200
            resolve(JSON.parse(xhttp.response)); //resolving the request means accepting request if  status is found
        }
        else{
            reject(xhttp.statusText);//else reject method and passing through status text of this object
        }
    };
    xhttp.onerror=function(){  
        reject(xhttp.statusText);
    };
   

    xhttp.send();
});

}
var promise = get("data/tweets.json");  //get grabs the json data format and when we call it it returns a promise as avobe line before this data is brought  to us back
promise.then(function(tweets){ //when resolved or data is rturned if promise is fulfilled we use then method
    console.log(tweets);
    return get("data/friends.json");//after tweets promis eis fulfilled then another promise for freinds is called
}).then(function(friends){
    console.log(friends);
    return get("data/fruits.json");//after tweets promis eis fulfilled then another promise for fruits is called

}).then(function(fruits){
    console.log(fruits);
}).catch(function(error){ //if not resolved catch method called
    console.log(error);
});
};
