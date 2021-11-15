window.onload=function(){
    function handleError(jqXHR,textStatus,error ){
        
        console.log(error);
    
    }
    $.ajax({
        type:"GET",
        url:"data/tweets.json",
        success:cbTweets,
        error:handleError
    });
     function cbTweets(data){
         console.log(data);
    
         $.ajax({
            type:"GET",
            url:"data/fruits.json",
            success:cbFruits,
            error:handleError
        });
    }
    function cbFruits(data){
        console.log(data);
    
    
        $.ajax({
            type:"GET",
            url:"data/friends.json",//after this data is retrieved 
            success:cbFriends,//callback this function
            error:handleError
        });
    }
    function cbFriends(data){
        console.log(data);
    },
    error:handleError
    });
    }
    };
    