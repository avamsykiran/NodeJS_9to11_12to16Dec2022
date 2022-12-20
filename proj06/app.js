const pickPrimes = (lb,ub) => {

    let bgJob = (resolve,reject) => {
        if(lb>ub){
            reject(`Lower bound ${lb} is greater than upper bound ${ub}!`);
            return;
        }

        let n = lb;
        let primes = [];
        
        let handler = setInterval(() => {    
            let isPrime=true;
            for(let x=2;x<=n/2;x++){
                if(n%x===0){
                    isPrime=false;
                    break;
                }
            }
            if(isPrime){
                primes.push(n);
            }
            n++;
            if(n>ub){
                clearInterval(handler);
                resolve(primes);
            }
        },1000);
    }

    return new Promise(bgJob);
};

console.log("PLZ WAIT......");

let p1 = pickPrimes(10,50);
p1.then( result => console.log(result)).catch(err => console.log(err));

let p2 = pickPrimes(50,100);
p2.then( result => console.log(result)).catch(err => console.log(err));

let p3 = pickPrimes(100,10);
p3.then( result => console.log(result)).catch(err => console.log(err));

