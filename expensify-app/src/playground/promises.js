let allowResolve = true;

const promise = new Promise((resolve, reject)=>{
    console.log(1);
    console.log(2);
    setTimeout(()=>{
        console.log(3);
        console.log(4);
        resolve('ho gaya');
        reject('sorry');
    }, 3000);
    console.log(5);
});


