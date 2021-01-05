async function myFunc(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hello')
        }, 1000)
    })

    const error = true;
    if(!error){
        const res = await promise; //wait until promise is resolved
        return res;
    }else{
        await Promise.reject(new Error('Something went wrong'))
    }

    
}

myFunc()
    .then(res => {
        return console.log(res)
    })
    .catch(res => {
        return console.log(res)
    })