const getTodos = (resource) => { 
    return new Promise((resolve,reject)=>{
const request= new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
if(request.readyState === 4 && request.status === 200 ){
  
    const data = JSON.parse(request.responseText);
   resolve(data);
    
}
else if(request.readyState === 4){
reject('error getting resource');
}
});
 
request.open('GET',resource);
request.send();
});
};
getTodos('todos/rachita.json').then(data => {
    console.log('promise 1 resolved:',data);
    return getTodos('todos/basnet.json');
}).then(data => {
    console.log('promise 2 resolved:',data);
    


}).catch((err) => {
    console.log('promise rejected:',err);
});

// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{ //parameters are built into the promise api in js and can automticlly receive this
// resolve('some data');
// reject('some error');
//     };

