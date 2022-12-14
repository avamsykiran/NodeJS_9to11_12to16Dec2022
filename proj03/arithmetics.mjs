export const sum = function (a, b) { return a + b; };
export const dif = function (a, b) { return a - b; };
export const prd = function (a, b) { return a * b; };
export const qut = function (a, b) { return a / b; };
export const rem = function (a, b) { return a % b; };

const countFactors = function(n){
    let count=2;
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            count++;
        }
    }
    return count;
}

export default countFactors;
