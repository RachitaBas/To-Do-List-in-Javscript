//async and await
const getTodos = async() => {//any function with async infront of it returns promise
    const response = await fetch ('todos/basnet.json');//await stops assinging  value to response until promise resolved
if(response.status !==200){
    throw new Error('cannot fetch the data');//throwing our own error object inside async function ,the promise returned by this async fn is rejected as if sthg wrong on todos or reource url it resolves in console
}

    const data = await response.json(); //json is asynchrnous and returns promise so until promise is resolved awaits and assign value to data
return data;
};

          getTodos()//call gettodos that returns promise 1 and carries all functions inside it that is 2 and 3 and returns the data 
          .then(data =>console.log('resolved:',data))  //when we get promise back it resolbes and we ae logging that to console
           .catch(err=> console.log('rejected:',err.message));//when promise rejected and catch error we have thrown above here
            

//if error inside rachita.json then promise is rejected directly but in recource url it can be reolved so we make our own error












//  //fetch api
//  fetch('todos/rachita.json').then((response) => { //data that we want to fetch
// console.log('resolved',response);
//  return response.json();//gets us response data so taht we can use that data i.e it returns a promise
// }).then(data => {//retruning promise avove gives us a resolved  promise that gives us data that we went out to fetch
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected',err);
// });
    