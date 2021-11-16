 //fetch api
 fetch('todos/rachita.json').then((response) => { //data that we want to fetch
console.log('resolved',response);
 return response.json();//gets us response data so taht we can use that data i.e it returns a promise
}).then(data => {//retruning promise avove gives us a resolved  promise that gives us data that we went out to fetch
    console.log(data);
}).catch((err)=>{
    console.log('rejected',err);
});
    