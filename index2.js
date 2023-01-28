const arr=[1,2,3,4,5,7,1,2,9,3]
let count={};
arr.forEach((val,index)=>{

if(!count[val])
{
     count[val]=1;
}
else{
    count[val]=count[val]+1
}
})
console.log(count);


