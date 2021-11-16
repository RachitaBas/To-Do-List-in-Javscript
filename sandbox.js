const request= new XMLHttpRequest();//SEND REQUEST TO GET DATA
request.addEventListener('readystatechange',()=>{//ADDEVENTLISTENER TO TRACK PROGRESS OF REQUEST AND readystate to tell request goes through different phases and 4 in total
// console.log(request,request.readyState);//state taht current request is in 
if(request.readyState === 4 && request.status === 200 ){//readystate is 4 so if it is in 4 then it send response text or data we can use .
    console.log(request,request.responseText);//requesting response text if state is 4
}
else if(request.readyState === 4){//thought state is 4 but some problm then fire following console
    console.log('could not fetch the data');
}
});
 
request.open('GET',' https://jsonplaceholder.typicode.com/todos/');//get to get some data and this is just setting up request and second arg is endpoint we want to get data from
request.send();//send request