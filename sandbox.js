console.log("rachita");//fires at 1
console.log("basnet");//fires at 2
setTimeout(()=>{
    console.log('callback function fired');//wait 2 sec and pass callback function somehwere else outside js code
},2000);
console.log(writes);//firest at 3
console.log(thiscode);//firest at 4
//fires callback function her after 2 sec without blocking code above.