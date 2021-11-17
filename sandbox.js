//async and await
const getTodos = async() => {//any function with async infront of it returns promise
    const response = await fetch ('todos/basnet.json');//await stops assinging  value to response until promise resolved
const data = await response.json(); //json is asynchrnous and returns promise so until promise is resolved awaits and assign value to data
return data;
};
console.log(1);
console.log(2);
          getTodos()//call gettodos that returns promise 1 and carries all functions inside it that is 2 and 3 and returns the data 
          .then(data =>  //when we get promise back it resolbes and we ae logging that to console
              console.log('resolved:',data));
            
              console.log(3);
              console.log(4);//async function whole code takes sometime to do so it starts print 1234 first and then start again and finish later 

//async helps to chain promises together















//  //fetch api
//  fetch('todos/rachita.json').then((response) => { //data that we want to fetch
// console.log('resolved',response);
//  return response.json();//gets us response data so taht we can use that data i.e it returns a promise
// }).then(data => {//retruning promise avove gives us a resolved  promise that gives us data that we went out to fetch
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected',err);
// });
    