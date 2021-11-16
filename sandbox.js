const getTodos = (callback) => { //define callback here and call the gettodos function below
const request= new XMLHttpRequest();//SEND REQUEST TO GET DATA
request.addEventListener('readystatechange',()=>{//ADDEVENTLISTENER TO TRACK PROGRESS OF REQUEST AND readystate to tell request goes through different phases and 4 in total
// console.log(request,request.readyState);//state taht current request is in 
if(request.readyState === 4 && request.status === 200 ){
    //readystate is 4 so if it is in 4 then it send response text or data we can use .

    const data = JSON.parse(request.responseText);//convert request.responsetext json string to js object
    
    callback(undefined,data);
    
}
else if(request.readyState === 4){//thought state is 4 but some problem then fire following console
    callback('could not fetch the data',undefined);//if not readystate found cannot fetch data
}
});
 
request.open('GET','todos.json');
request.send();//send request
};
console.log(1);
console.log(2);

getTodos((err, data) => {  ////call gettodos function here and paasing callback function as argument
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);
//aynchnous code because 12 then 34 is called first then callback is fired shown as it starts again after receiving data till then 3 and 4 is executed and then data is shown below it