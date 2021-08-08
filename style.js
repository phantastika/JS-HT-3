
function factorial (n) {
let total = n;
for ( i = 1; i < n; i++) {       
total = total*(n-i)           
} 
return (total)
}  
    
    
function rate (number, rate) {
let result = number;
for (i = 1; i < rate; i++) {            
result = result*number
}
return (result)           
}


function leastCommonMultiple (numberA, numberB) {
let minNumber 
if (numberA > numberB) {
minNumber=numberB;
} else {
minNumber=numberA;
}
for (i=2; i <= minNumber; i++) {
if (numberA%i===0 && numberB%i===0) {
return i; 
}                     
}
return false        
}
        
       