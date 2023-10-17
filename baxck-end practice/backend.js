console.log(() => console.log("shh, i am anonimous"));

const log = (name) => {
    console.log(`Welcome ${name}, to my console. hiii!!`)
}

log("jatin")

const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.5){
        resolve('Lucky!!')
    } else{
        reject(new Error('Unlucky!!'))
    }
})

testLuck.then(message => {
    console.log(message)
}).catch(error =>{
    console.error(error)
})

const newPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("all done!")
    }, 5000);
})

const asyncFunction = async() =>{
    const finalresult = await newPromise
    console.log(finalresult)
}

asyncFunction()

const showTimeout = () => {
    setTimeout(() => {
        alert("i come in ever 5 seconds!")
    }, 5000);
}

showTimeout()